const express = require("express");

const moviesController = require("../controller/movies-controller");

const router = express.Router();

// GET /movies/
router.get("/", moviesController.getMovies);

router.post("/", moviesController.saveMovie);

module.exports = router;