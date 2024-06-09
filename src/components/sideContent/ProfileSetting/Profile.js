import React from "react";

function ProfileSetting() {
  return (
    <>
      <div className="Main_Profile_Page">
        <div className="Main_profile_header">
          <span style={{ fontSize: 22, fontWeight: 700, marginLeft: 25 }}>Profile</span>
        </div>
        <div className="Main_profile_imageDiv">
          <div className="profile_imageDiv"></div>
        </div>
        <div className="Main_profile_nameDiv">
          <div className="name_title">
            <span>Your name</span>
          </div>
          <div className="name_input">
            <span>🖤</span>
            <span>
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                className=""
                version="1.1"
                x="0px"
                y="0px"
                enableBackground="new 0 0 24 24"
              >
                <title>pencil</title>
                <path
                  fill="currentColor"
                  d="M3.95,16.7v3.4h3.4l9.8-9.9l-3.4-3.4L3.95,16.7z M19.75,7.6c0.4-0.4,0.4-0.9,0-1.3 l-2.1-2.1c-0.4-0.4-0.9-0.4-1.3,0l-1.6,1.6l3.4,3.4L19.75,7.6z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <span style={{padding: '20px 30px', fontSize: 14, color: '#54656f'}}>
          This is not your username or PIN. This name will be visible to your
          WhatsApp contacts.
        </span>
        <div className="Main_profile_about">
        <div className="About_title">
            <span>About</span>
          </div>
          <div className="About_input">
            <span style={{width: '80%'}}>Don't StuDy məH...😌❤ Yəw w0n't graduatə...❤🔥</span>
            <span>
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                className=""
                version="1.1"
                x="0px"
                y="0px"
                enableBackground="new 0 0 24 24"
              >
                <title>pencil</title>
                <path
                  fill="currentColor"
                  d="M3.95,16.7v3.4h3.4l9.8-9.9l-3.4-3.4L3.95,16.7z M19.75,7.6c0.4-0.4,0.4-0.9,0-1.3 l-2.1-2.1c-0.4-0.4-0.9-0.4-1.3,0l-1.6,1.6l3.4,3.4L19.75,7.6z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSetting;
