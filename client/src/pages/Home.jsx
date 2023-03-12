import React from "react";
import "./home.css";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import HomeMainBar from "../components/HomeMainBar";
const Home = () => {
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

export default Home;
