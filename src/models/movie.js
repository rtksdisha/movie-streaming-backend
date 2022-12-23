const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
  },
  releaseDate: {
    type: String,
  },
  coverImage: {
    type: String,
  },
});

const MovieModel = mongoose.model("Movie", MovieSchema);

module.exports = MovieModel;