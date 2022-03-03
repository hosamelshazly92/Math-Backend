// modules
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// imports
const { logger, domain } = require("./middlewares");
const questionsRoutes = require("./routes/questions");
const formRoutes = require("./routes/form");

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
app.use(express.urlencoded({ extended: false }));

// ejs template
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/questions", questionsRoutes);
app.use("/form", formRoutes);

// listen
app.listen(PORT, () => {
  console.log(`==========> server success`);
});
