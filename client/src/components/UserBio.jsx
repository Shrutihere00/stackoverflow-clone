import React from "react";
import "../pages/userProfile.css";

const UserBio = ({ currentProfile }) => {
  return (
    <>
      <div>
        {currentProfile?.tags.length !== 0 ? (
          <div>
            <h4>Tags Watched</h4>
            {currentProfile?.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
        ) : (
          <p>0 tags watched</p>
        )}
      </div>
      <div className="">
        {currentProfile?.about ? (
          <>
            <h4>About</h4>
            <p>{currentProfile?.about}</p>
          </>
        ) : (
          <p>No bio found</p>
        )}
      </div>
    </>
  );
};

export default UserBio;
