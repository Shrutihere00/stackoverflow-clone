import React from "react";
import "./rightSideBar.css";
const WidgetTags = () => {
  const tags = [
    "c",
    "css",
    "express",
    "firebase",
    "html",
    "javascript",
    "mongodb",
    "mysql",
    "node.js",
    "php",
    "python",
    "reactjs",
  ];
  return (
    <div className="widget-tags">
      <h4>Watched Tags</h4>
      <div className="widget-tags-div">
        {tags.map((tag, index) => {
          return <p key={index}>{tag}</p>;
        })}
      </div>
    </div>
  );
};

export default WidgetTags;
