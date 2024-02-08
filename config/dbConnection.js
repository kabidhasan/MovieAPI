const mongoose = require('mongoose');
const Movies = require('../models/movieModel');


const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`MongoDB Connected: ${connect.connection.host}`);
        await Movies.deleteMany({});
        console.log("All documents deleted from the 'movies' collection");
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;