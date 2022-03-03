// imports
const Question = require("../models/Question");
// get
module.exports.getForm = (req, res) => {
  res.render("form");
};

// post
module.exports.addForm = async (req, res) => {
  const { type, question, first, second, third, fourth, answer } = req.body;
  const newQuestion = new Question({
    type,
    question,
    choices: [first, second, third, fourth],
    answer,
  });
  await newQuestion.save();
  res.redirect("/form");
};

// edit
module.exports.editForm = async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Question.findByIdAndUpdate(id, req.body);
    await question.save();
    res.json({ success: true, message: "edit success!" });
  } catch {
    res.json({ success: false, message: "nothing found :(" });
  }
};

// remove
module.exports.removeForm = async (req, res) => {
  try {
    if (true) {
      const form = await Question.find();
      await Question.deleteMany();
      res.json({
        success: true,
        message: `${form.length} question(s) removed`,
      });
    } else {
      const { id } = req.params;
      await Question.findByIdAndDelete(id);
      res.json({ success: true, message: "remove success!" });
    }
  } catch {
    res.json({ success: false, message: "nothing found :(" });
  }
};
