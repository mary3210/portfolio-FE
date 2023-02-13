import React from "react";
function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href='"'>
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://github.com/mary3210">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mary-rodriguez-/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href='"'>
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href='"'>
              <i className="fa fa-facebook-square"></i>
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'm <span className="highlighted-text">Mary</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
                {" "}
                <h1>
                    
                </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
