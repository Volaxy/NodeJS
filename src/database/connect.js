const mongoose = require("mongoose");

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejscourse.20pvm0a.mongodb.net/?retryWrites=true&w=majority`, (error) => {
        if(error) {
            return console.log("There was an error connecting to the bank:", error);
        }

        console.log("Database connection successful");
    });
};

module.exports = connectToDatabase;