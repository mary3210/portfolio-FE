import React from "react";
function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
             <h1>Welcome to Mary's developer portfolio! Check out my projects! <span className="type"></span></h1>
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
            {/* <button className="btn primary-btn">
                {""}
                Hire Me {" "}
                </button> */}
            <a href='resume.pdf' download='Mary Rodriguez.pdf'>
                <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
            <div className="profile-picture-background">

            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
