const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://shaiksalma1125_db_user:shaiksalma@cluster0.wpz7gbd.mongodb.net/').then((res) => {
    console.log("Database Connected Successfully");
}).catch(err => {
    console.log("Something Error", err);
})


