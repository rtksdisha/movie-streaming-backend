const MovieService = require("../services/movie-service");

const getMovies = async (req, res) => {
  const movies = await MovieService.getMovies();
  res.json(movies);
};

const saveMovie = async (req, res) => {
  const movie = req.body;
  const savedMovie = await MovieService.saveMovie(movie);
  res.status(201).json(savedMovie);
};

module.exports = {
  getMovies,
  saveMovie,
};
