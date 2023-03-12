import mongoose from "mongoose";
import questions from "../models/questions.js";
export const postAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { noOfAnswers, answerBody, userAnswered, userId } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question Unavailable");
  }
  updateNoOfQuestions(_id, noOfAnswers);
  try {
    const updatedQuestion = await questions.findByIdAndUpdate(_id, {
      $addToSet: { answer: [{ answerBody, userAnswered, userId }] },
    });
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
const updateNoOfQuestions = async (_id, noOfAnswers) => {
  try {
    await questions.findByIdAndUpdate(_id, {
      $set: { noOfAnswers: noOfAnswers },
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { answerId, noOfAnswers } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question Unavailable");
  }
  if (!mongoose.Types.ObjectId.isValid(answerId)) {
    return res.status(404).send("Answer Unavailable");
  }
  updateNoOfQuestions(_id, noOfAnswers);
  try {
    await questions.updateOne(
      { _id },
      { $pull: { answer: { _id, answerId } } }
    );
    res.status(200).json({ message: "Successfully deleted the answer" });
  } catch (error) {
    res.status(405).json(error);
  }
};
