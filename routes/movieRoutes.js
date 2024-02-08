const express = require('express');
const router = express.Router();

const { getMovies, createMovie, getMovie, updateMovie } = require('../controllers/movieControllers');

router.route('/').get(getMovies);
router.route('/').post(createMovie);
router.route('/:id').get(getMovie).put(updateMovie);

module.exports = router;