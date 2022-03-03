// imports
const express = require("express");
const router = express.Router();
const form = require("../controllers/form");

// routes
router
  .get("/", form.getForm)
  .post("/", form.addForm)
  .put("/:id", form.editForm)
  .delete("/:id", form.removeForm);

module.exports = router;
