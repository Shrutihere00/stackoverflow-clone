import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { askQuestion } from "../actions/question.js";
import "./askQuestion.css";

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((state) => state.currentUserReducer);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      askQuestion(
        {
          questionTitle,
          questionBody,
          questionTags,
          userPosted: User.result.name,
          userId: User?.result?._id,
        },
        navigate
      )
    );
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "/n");
    }
  };
  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h1>Title</h1>
              <p>
                Be specific and imagine you're asking a question to another
                person
              </p>
              <input
                type="text"
                id="ask-ques-title"
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                value={questionTitle}
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h1>Body</h1>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                className="textarea"
                id="ask-ques-body"
                value={questionBody}
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                onKeyUp={handleEnter}
              ></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h1>Tags</h1>
              <p>
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </p>
              <input
                type="text"
                id="ask-ques-tags"
                placeholder="e.g. (xml typescript wordpress)"
                // value={questionTags}
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
              />
            </label>
          </div>
          <input
            type="submit"
            className="review-btn"
            value="Review your question"
          />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
