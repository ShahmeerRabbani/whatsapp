import React, { useState } from "react";
import { BsChatLeftText } from "react-icons/bs";
import { profile } from "../../Assets/images";
import { ArchiveIcon, ChannelIcon, ChatIcon, ChatFillIcon, CommunityIcon, SettingIcon, StarIcon, StatusIcon } from "../../Assets";

function SideSettings({ handleButtonClick, handleRemoveWallpaperPage }) {
  const handleNavigate = (componentName) => {
    handleButtonClick(componentName);

    // if(componentName !== 'Settings' && componentName !== 'AnotherComponent'){
    //   return;
    // }

    if(componentName === "Settings"){
      return;
    }
    else{
      handleRemoveWallpaperPage(false);
    }
  };

  return (
    <>
      <div className="Settings">
        <div className="upper_settings">
          <div className="Chat" onClick={() => handleNavigate("Chat")}>
            <ChatIcon/>
          </div>
          <div className="Group" onClick={() => handleNavigate("Group")}>
            <CommunityIcon/>
          </div>
          <div className="StatusBtn" onClick={() => handleNavigate("StatusBtn")}>
           <StatusIcon/>
          </div>
          <div className="Channel" onClick={() => handleNavigate("Channel")}>
           <ChannelIcon/>
          </div>
          <div
            style={{
              width: "40%",
              height: "2px",
              margin: "5px 0",
              backgroundColor: "#c0c2c4",
            }}
          ></div>
          {/* <div className="Archive" onClick={() => handleNavigate("Archive")}>
           <ArchiveIcon/>
          </div>
          <div className="StarMessage" onClick={() => handleNavigate("Star")}>
           <StarIcon/>
          </div> */}
        </div>
        <div className="lower_settings">
          <div
            className="main_setting"
            onClick={() => handleNavigate("Settings")}
          >
            <SettingIcon/>
          </div>
          <div
            className="profile_setting"
            onClick={() => handleNavigate("profile_Dp")}
          >
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
      </div>
    </>
  );
}

export default SideSettings;
