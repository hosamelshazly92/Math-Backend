// modules
const express = require("express");
const mongoose = require("mongoose");

// imports
const questionsRoutes = require("./routes/questions");
const { logger, domain } = require("./middlewares");

// env
require("dotenv").config();

// vars
const app = express();
const PORT = 5000;
const DBURL = process.env.DBURL;
const DB = mongoose.connection;

// db
mongoose.connect(DBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

DB.on("error", console.error.bind(console, "connection error:"));
DB.once("open", () => {
  console.log("==========> db server success");
});

// middlewares
app.use(logger);
app.use(domain);
app.use(express.json());

// routes
app.use("/questions", questionsRoutes);

// listen
app.listen(PORT, () => {
  console.log(`==========> server success`);
});
