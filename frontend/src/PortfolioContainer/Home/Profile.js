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
              Hello I'm Mary<span className="type"></span>
            </span>
          </div>
          <div className="profile-details-role">
            <script src="typed.js"></script>
            <script>
            {/* var typed = new Typed('.type', {
  strings: ['This is a JavaScript library', 'This is an ES6 module'],
  smartBackspace: true // Default value
}); */}
            <span className='profile-role-tagline'>
                On a quest to create with both back-end and front-end operations.
            </span>
            </script>
          </div>
          <div className="profile-options">
            <button className="btn-primary-btn">
                {""}
                Hire Me {" "}
                </button>
            <a href='resume.pdf' download='Mary Rodriguez.pdf'>
                <button className='btn-highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
