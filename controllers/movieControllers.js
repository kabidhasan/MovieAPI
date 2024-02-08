const asyncHandler = require('express-async-handler');
const Movie = require('../models/movieModel');


const getMovies = asyncHandler(async (req, res) => {
    const movies = await Movie.find({});
    res.status(200).json(movies);
});

const getMovie = asyncHandler(async (req, res) => {
    const customId = req.params.id;
    const movie = await Movie.findOne({ id: customId });
    
    if (!movie) {
        res.status(404);
        throw new Error('Movie not found');
    }

    res.status(200).json(movie);
});




const createMovie = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const { id, name, genre, rating } = req.body;
    if (!name || !genre || !rating || !id) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    const movie = await Movie.create({
        id,
        name,
        genre,
        rating,
    });
  
    res.status(201).json(movie);
});
  

const updateMovie = asyncHandler(async (req, res) => {
    const customId = req.params.id;
    const { name, genre, rating } = req.body;

    const existingMovie = await Movie.findOne({ id: customId });
    if (!existingMovie) {
        res.status(404);
        throw new Error('Movie not found');
    }

    existingMovie.name = name;
    existingMovie.genre = genre;
    existingMovie.rating = rating;

    const updatedMovie = await existingMovie.save();

    res.status(200).json(updatedMovie);
});


module.exports = { getMovies, createMovie, getMovie, updateMovie };