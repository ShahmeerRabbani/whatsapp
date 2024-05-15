import React from "react";
import { profile } from "../../../images";

function ProfileInformation({ isProfileShow, selectedMessage }) {
  return (
    <>
      <div
        className="profile_info"
        style={{ display: isProfileShow ? "flex" : "none" }}
      >
        <div className="close_profile">
          <span className="close_button">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              class=""
              fill="currentColor"
              enable-background="new 0 0 24 24"
            >
              <title>Close</title>
              <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
            </svg>
          </span>
          <div>
            <span style={{ marginLeft: 30, color: "black" }}>Contact Info</span>
          </div>
        </div>
        <div className="profile_dp">
          <div className="Big_Image">
            <img
              src={profile}
              style={{
                objectFit: "cover",
                height: "-webkit-fill-available",
                width: "-webkit-fill-available",
              }}
            />
          </div>
          <span style={{ fontSize: "25px", color: "#3B4A54", marginBottom: 2 }}>
            {selectedMessage.name}
          </span>
          <span
            style={{ fontSize: 15, color: "#54656F", letterSpacing: "1px" }}
          >
            +92 317 2980810
          </span>
        </div>
        <div className="profile_about">
          <div className="about_heading">
            <span>About</span>
          </div>
          <div className="about">
            <span>ALHAMDULLILAH ✨FOR EVERYTHING</span>
          </div>
        </div>
        <div className="profile_media-links">
          <div
            style={{
              display: "flex",
              flex: 4,
              alignItems: "center",
              padding: '0 30px',
              color: "#667781",
              cursor: "pointer",
            }}
          >
            <span>Media links and docs</span>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#667781",
            }}
          >
            <div>
              <span>0</span>
            </div>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 10,
              }}
            >
              <svg
                viewBox="0 0 10 21"
                height="21"
                width="10"
                preserveAspectRatio="xMidYMid meet"
                className=""
                version="1.1"
                x="0px"
                y="0px"
                enableBackground="new 0 0 10 21"
              >
                <title>chevron-right-alt</title>
                <path
                  fill="currentColor"
                  d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}

export default ProfileInformation;
