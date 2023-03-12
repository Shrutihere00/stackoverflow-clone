import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import "../components/homeMainBar.css";
import "./displayQuestions.css";
import QuestionsDetails from "../components/QuestionsDetails";
const DisplayQuestions = () => {
  return (
    <div className="home-main-container">
      <div className="home-container-1">
        <LeftSideBar />
      </div>
      <div className="home-container-2">
        <QuestionsDetails />
        <RightSideBar />
      </div>
    </div>
  );
};

export default DisplayQuestions;
