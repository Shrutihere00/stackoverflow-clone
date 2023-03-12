import React from "react";
import HomeMainBar from "../components/HomeMainBar";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";

const Questions = () => {
  return (
    <div className="home-main-container">
      <div className="home-container-1">
        <LeftSideBar />{" "}
      </div>
      <div className="home-container-2">
        <HomeMainBar /> <RightSideBar />
      </div>
    </div>
  );
};

export default Questions;
