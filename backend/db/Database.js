const mongoose = require("mongoose");

const connectDatabase = () => {
    //console.log('DB_URL:', process.env.DB_URL); Log DB_URL to verify

    mongoose.connect(process.env.MONGO_URI)
        .then((data) => {
            console.log(`connected with server: ${data.connection.host}`);
        })
        .catch((error) => {
            console.error('Error connecting to the database:', error);
        });
}

module.exports = connectDatabase;
