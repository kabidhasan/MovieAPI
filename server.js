const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');


const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());
app.use("/api/movies", require("./routes/movieRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});