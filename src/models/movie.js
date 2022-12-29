const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
  },
  genre: {
    type: String,
  },
  movieUrl: {
    type: String,
  },
  releaseDate: {
    type: Number,
  },
  coverImage: {
    type: String,
  },
  isFavorite: {
    type: Boolean,
  },
});

const MovieModel = mongoose.model("Movie", MovieSchema);

module.exports = MovieModel;
