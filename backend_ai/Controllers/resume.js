const ResumeModel = require('../Models/resume')
const multer = require("multer");
const { PDFParse } = require("pdf-parse");
const path = require("path");



const { CohereClientV2 } = require("cohere-ai");

const cohere = new CohereClientV2({
    token: "rzQIB5PbAAEtxuAqNzqLVJoOoarhwrtbQIHZfIOS",
});



exports.addResume = async (req, res) => {
    try {
        const { job_desc, user } = req.body;
        console.log("BODY:", req.body);
        console.log("JOB DESCRIPTION:", job_desc);
        console.log("USER:", user);

        // console.log(req.file);
        //  console.log(job_desc, user)

        const fs = require("fs");

        const pdfPath = req.file.path;
        const dataBuffer = fs.readFileSync(pdfPath);

        const parser = new PDFParse({ data: dataBuffer });

        try {
            const pdfData = await parser.getText();

            const prompt = `
        You are a resume screening assistant.
        Compare the following resume text with the provided Job Description (JD) and give a match score (0-100) and feedback.

        Resume:
        ${pdfData.text}

        Job Description:
        ${job_desc}

        Return the score and a brief explanation in this format:
            Score: XX
            Reason: ...
    `;
            const response = await cohere.chat({
                model: "command-a-03-2025",
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
            });

            let result = response.message.content[0].text;
            //console.log(result);

            const match = result.match(/Score:\s*(\d+)/);
            const score = match ? parseInt(match[1], 10) : null;

            const reasonMatch = result.match(/Reason:\s*([\s\S]*)/);
            const reason = reasonMatch ? reasonMatch[1].trim() : null;

            const newResume = new ResumeModel({
                user,
                resume_name: req.file.originalname,
                job_desc,
                score,
                feedback: reason
            });

            await newResume.save();
            fs.unlinkSync(pdfPath);
            res.status(200).json({ message: "Your analysis are ready", data: newResume });

        } finally {
            await parser.destroy();
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Server error', message: err.message });

    }
}


exports.getAllResumesForUser = async (req, res) => {
    try {
        const { user } = req.params;
        let resumes = await ResumeModel.find({ user: user }).sort({ createdAt: -1 });
        return res.status(200).json({ message: "Your Previous History", resumes: resumes });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error', message: err.message });
    }
}

exports.getResumeForAdmin = async (req, res) => {
    try {
        let resumes = await ResumeModel.find({}).sort({ createdAt: -1 });
        return res.status(200).json({ message: "Fetched All History", resumes: resumes });


    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error', message: err.message });
    }
}