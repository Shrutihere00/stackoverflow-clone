import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Avatar from "../components/Avatar";
import LeftSideBar from "../components/LeftSideBar";
import "./userProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import EditProfileForm from "../components/EditProfileForm";
import UserBio from "../components/UserBio";
const UserProfile = () => {
  const [Switch, setSwitch] = useState(false);
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);
  return (
    <div className="home-main-container">
      <div className="home-container-1">
        <LeftSideBar />{" "}
      </div>
      <div className="home-container-2">
        <section style={{ marginTop: "10px" }}>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar
                children={currentProfile?.name?.charAt(0).toUpperCase()}
                backgroundColor={"purple"}
                px={"40px"}
                py={"30px"}
                color={"white"}
                borderRadius={"5px"}
                fontSize={"50px"}
              />
              <div className="user-name">
                <h1>{currentProfile?.name} </h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                  {moment(currentProfile?.joinedOn).fromNow()}
                </p>
              </div>
            </div>
            {currentUser?.result._id === id && (
              <button
                type="button"
                onClick={() => setSwitch(true)}
                className="edit-profile-btn"
              >
                <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
            )}
          </div>{" "}
          <div className="">
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
              />
            ) : (
              <UserBio currentProfile={currentProfile} />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
