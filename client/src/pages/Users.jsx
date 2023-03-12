import React from "react";
import { useLocation } from "react-router-dom";

import LeftSideBar from "../components/LeftSideBar";
import "./users.css";
import UsersList from "./UsersList";
const Users = () => {
  const location = useLocation();
  return (
    <div className="home-main-container">
      <div className="home-container-1">
        <LeftSideBar />{" "}
      </div>
      <div className="home-container-2">
        <h2 style={{ fontWeight: "400", marginTop: "10px" }}>Users </h2>{" "}
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
