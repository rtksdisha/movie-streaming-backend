const Movie = require("../models/movie");

const getMovies = async () => {
  const movies = await Movie.find().lean().exec();
  return movies;
};

const saveMovie = async (movie) => {
  const savedMovie = new Movie(movie);
  await savedMovie.save();
  return savedMovie;
};

module.exports = {
  getMovies,
  saveMovie,
};