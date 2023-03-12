import React from "react";
import "./leftSideBar.css";
import { NavLink } from "react-router-dom";
const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeClassName="active">
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div className="">
            <p>PUBLIC</p>
          </div>
          <NavLink
            to="/Questions"
            className="side-nav-links"
            activeClassName="active"
          >
            <i className="fa-solid fa-globe"></i>
            <p style={{ paddingLeft: "10px" }}>Questions</p>
          </NavLink>
          <NavLink
            to="/Tags"
            className="side-nav-links"
            activeClassName="active"
            style={{ paddingLeft: "40px" }}
          >
            <p>Tags</p>
          </NavLink>
          <NavLink
            to="/Users"
            className="side-nav-links"
            activeClassName="active"
            style={{ paddingLeft: "40px" }}
          >
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSideBar;
