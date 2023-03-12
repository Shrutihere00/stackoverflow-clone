import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./homeMainBar.css";
import Questions from "./Questions";
const HomeMainBar = () => {
  const questionList = useSelector((state) => state.questionsReducer);
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();
  const Redirect = () => {
    if (user === null) {
      alert("Login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/askQuestions");
    }
  };
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <div className="ask-btn" onClick={() => Redirect()}>
          Ask Question
        </div>
      </div>
      <div className="">
        {questionList.data === null ? (
          <h1>Loading....</h1>
        ) : (
          <>
            <p>{questionList.data.length} Questions</p>
            {questionList.data.map((item, index) => {
              return <Questions key={index} question={item} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainBar;
