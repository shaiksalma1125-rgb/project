
import React, { useState, useContext } from 'react';
import styles from './Dashboard.module.css';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import Skeleton from '@mui/material/Skeleton';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';
import axios from '../../utils/axios';
import { AuthContext } from '../../utils/AuthContext';

const Dashboard = () => {
    const [uploadFiletext, setUploadFileText] = useState("Upload your resume");
    const [loading, setLoading] = useState(false);
    const [resumeFile, setResumeFile] = useState(null);
    const [jobDesc, setJobDesc] = useState("");
    const [result, setResult] = useState(null);

    const { userInfo } = useContext(AuthContext);


    const handleOnChangeFile = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        if (file.type !== "application/pdf") {
            alert("Please upload a PDF file.");
            e.target.value = "";
            setResumeFile(null);
            setUploadFileText("Upload your resume");
            return;
        }

        setResumeFile(file);
        setUploadFileText(file.name);
    };


    const handleAnalyze = () => {
        if (!resumeFile) {
            alert("Please upload your resume first.");
            return;
        }

        if (!jobDesc.trim()) {
            alert("Please paste the complete job description.");
            return;
        }

        handleUpload();
    };



    const handleUpload = async () => {
        setResult(null);

        if (!jobDesc.trim() || !resumeFile) {
            alert("Please fill Job Description & Upload Resume");
            return;
        }


        const formData = new FormData();
        formData.append("resume", resumeFile);
        formData.append("job_desc", jobDesc);
        formData.append("user", userInfo._id);

        try {
            setLoading(true);

            const response = await axios.post(
                '/api/resume/addResume',
                formData
            );

            console.log(response.data);
            setResult(response.data);
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || "Resume upload failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.Dashboard}>
            <div className={styles.Dashboardleft}>
                <div className={styles.DashboardHeader}>
                    <div className={styles.DashboardHeaderTitle}>
                        Smart Resume Screening
                    </div>

                    <div className={styles.DashboardHeaderLargeTitle}>
                        Resume Match Score
                    </div>

                    <div className={styles.alertInfo}>
                        <div>🔔 Important Instructions:</div>

                        <div className={styles.dashboardInstruction}>
                            <div>
                                📄 Please paste the complete job description in
                                the "Job Description" field before submitting.
                            </div>

                            <div>
                                📎 Only PDF format (.pdf) resumes are accepted.
                            </div>
                        </div>
                    </div>

                    <div className={styles.DashboardUploadResume}>
                        <div className={styles.DashboardResumeBlock}>
                            {uploadFiletext}
                        </div>

                        <div className={styles.DashboardInputField}>
                            <label
                                htmlFor="inputFeild"
                                className={styles.analyzeAIBtn}
                            >
                                Upload Resume
                            </label>

                            <input
                                type="file"
                                accept=".pdf,application/pdf"
                                id="inputFeild"
                                onChange={handleOnChangeFile}
                            />
                        </div>
                    </div>

                    <div className={styles.jobDesc}>
                        <textarea
                            value={jobDesc}
                            onChange={(e) => { setJobDesc(e.target.value) }}
                            className={styles.textArea}
                            placeholder="Paste Your Job Description here..."
                            rows={10}
                            cols={50}
                        />

                        <button
                            type="button"
                            className={styles.AnalyzeBtn}
                            onClick={handleAnalyze}

                        >
                            {loading ? "Analyzing..." : "Analyze"}
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.DashboardRight}>
                <div className={styles.DashboardRightTopCard}>
                    <div>Analyze With AI</div>
                    <h2>CodingHunger</h2>
                </div>

                <Skeleton
                    variant="rectangular"
                    sx={{ borderRadius: "20px" }}
                    width={280}
                    height={280}
                />
            </div>
        </div>
    );
};

export default WithAuthHOC(Dashboard);
