// imports
const express = require("express");
const router = express.Router();
const questions = require("../controllers/questions");

// routes
router
  .get("/", questions.getQuestions)
  .post("/", questions.addQuestions)
  .put("/:id", questions.editQuestions)
  .delete("/:id", questions.removeQuestions);

module.exports = router;
