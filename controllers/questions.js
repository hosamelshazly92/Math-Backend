// imports
const Question = require("../models/Question");
const questionsSeeds = require("../seeds");

// get
module.exports.getQuestions = async (req, res) => {
  const questions = await Question.find().sort({ createdAt: -1 });

  res.json({
    success: true,
    count: `${questions.length} question(s)`,
    questions: questions,
  });
};

// post
module.exports.addQuestions = async (req, res) => {
  if (false) {
    const questions = await Question.insertMany(questionsSeeds);
    res.json({
      success: true,
      message: `${questions.length} question(s) added`,
    });
  } else {
    const question = new Question(req.body);
    console.log(question);
    await question.save();
    res.json({ success: true, message: "add success!" });
  }
};

// edit
module.exports.editQuestions = async (req, res) => {
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
module.exports.removeQuestions = async (req, res) => {
  try {
    if (false) {
      const questions = await Question.find();
      await Question.deleteMany();
      res.json({
        success: true,
        message: `${questions.length} question(s) removed`,
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
