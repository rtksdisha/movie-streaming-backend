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

const updateMovie = async (req, res) => {
  const { id } = req.params;
  const newMovieInfo = req.body;

  const updatedMovie = await MovieService.updateMovie(id, newMovieInfo);

  res.json(updatedMovie);
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;

  await MovieService.deleteMovie(id);

  res.status(204).send();
};

module.exports = {
  getMovies,
  saveMovie,
  updateMovie,
  deleteMovie,
};
