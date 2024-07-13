import React from "react";
import {profile} from '../../Assets/images/index'
import { PencilIcon } from "../../Assets";

function ProfileSetting() {
  return (
    <>
      <div className="Main_Profile_Page">
        <div className="Main_profile_header">
          <span style={{ fontSize: 22, fontWeight: 700, marginLeft: 25 }}>Profile</span>
        </div>
        <div className="Main_profile_imageDiv">
          <div className="profile_imageDiv">
          <img
              src={profile}
              style={{
                objectFit: "cover",
                height: "-webkit-fill-available",
                width: "-webkit-fill-available",
              }}
            />
          </div>
        </div>
        <div className="Main_profile_nameDiv">
          <div className="name_title">
            <span>Your name</span>
          </div>
          <div className="name_input">
            <span>🖤</span>
            <span>
             <PencilIcon/>
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
              <PencilIcon/>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSetting;
