import mongoose from "mongoose";
import questions from "../models/questions.js";
export const AskQuestion = async (req, res) => {
  const postQuestionsData = req.body;
  const postQuestion = new questions(postQuestionsData);
  try {
    const savedQuestion = await postQuestion.save();
    res
      .status(200)
      .json({ message: "Posted a question successfully", savedQuestion });
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Could n't post a new question");
  }
};
export const getAllQuestions = async (req, res) => {
  try {
    const questionList = await questions.find();
    res.status(200).json(questionList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const deleteQuestion = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question unavailable");
  }
  try {
    await questions.findByIdAndRemove(_id);
    res.status(200).json({ message: "Successfully Deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const voteQuestion = async (req, res) => {
  const { id: _id } = req.params;
  const { value, userId } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question Unavailable");
  }
  try {
    const question = await questions.findById(_id);
    const upIndex = question.upVote.findIndex((id) => id === String(userId));
    const downIndex = question.downVote.findIndex(
      (id) => id === String(userId)
    );
    if (value === "upVote") {
      if (downIndex !== -1) {
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }
      if (upIndex === -1) {
        question.upVote.push(userId);
      } else {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
    } else if (value === "downVote") {
      if (upIndex !== -1) {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
      if (downIndex === -1) {
        question.downVote.push(userId);
      } else {
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }
    }
    await questions.findByIdAndUpdate(_id, question);
    res.status(200).json({ message: "Voted Successfully" });
  } catch (error) {
    req.status(500).json({ message: error.message });
  }
};
