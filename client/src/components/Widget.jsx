import React from "react";
import "./rightSideBar.css";
const Widget = () => {
  return (
    <div className="widget">
      <h4>The overflow blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <i className="fa-solid fa-pen fa-lg"></i>
          <p>Our favorite apps, books, and games of 2023 (Ep. 524)</p>
        </div>
        <div className="right-sidebar-div-2">
          <i className="fa-solid fa-pen  fa-lg"></i>
          <p>The Winter/Summer Bash 2022 Hat Cafe is now closed!</p>
        </div>
      </div>
      <h4>Featured on meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <i className="fa-solid fa-message  fa-lg"></i>
          <p>Temporary policy: ChatGPT is banned Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="right-sidebar-div-2">
          <i className="fa-solid fa-message  fa-lg "></i>
          <p>Should we burninate the [shipping] tag?</p>
        </div>
        <div className="right-sidebar-div-2">
          <i className="fa-brands fa-stack-overflow  fa-lg"></i>
          <p>Rename [overflow] Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <h4>New meta posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>90</p>
          <p>
            What's the sense of [sql-and] and [sql-or] when we have
            [logical-and] and...
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>39</p>
          <p>The Winter/Summer Bash 2022 Hat Cafe is now closed!</p>
        </div>
        <div className="right-sidebar-div-2">
          <p>19</p>
          <p>The Winter/Summer Bash 2022 Hat Cafe is now closed!</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
