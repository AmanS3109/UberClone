const mongoose = require('mongoose');

function connectToDb() {
    const uri = process.env.DB_CONNECT;
    mongoose.connect(uri)
    .then(() => console.log("Connected to DB"))
    .catch(err => {
        console.error("DB Connection Error:", err.message);
        process.exit(1);
    });
}

module.exports = connectToDb;
