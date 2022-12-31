const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const movieRouter = require("./routes/movies");

const app = express();
const port = process.env.PORT || 4000;

//executed before passing to router function
app.use(express.json());
app.use(cors());

//get home page
app.get("/", (req, res) => {
  res.json({ message: "Hello Bootcamp!" });
});

app.use("/movies", movieRouter);

const connectDb = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.DB_URI, () => {
    console.log("Connected to MongoDB");
  });
};

const server = app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
  connectDb();
});

module.exports = { app, server };
