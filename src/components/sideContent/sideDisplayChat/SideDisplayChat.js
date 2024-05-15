import React from "react";
import Chat from "../ChatComponent/Chat";
import Group from "../Group/Group";
import Status from "../Status/Status";
import Channel from "../Channel/Channel";
import Archive from '../Archive/Archive'
import Star from '../Star/Star'
import Settings from "../Settings/Settings";
import ProfileSetting from "../ProfileSetting/Profile";
function SideDisplayChat({selectComponent, handleDisplay, onMessageClick}) {

 
  return (
    <>
      <div className="Main_SideDisplay">
      {selectComponent === "Chat" && <Chat handleDisplay = {handleDisplay} onMessageClick={onMessageClick}/>}
      {selectComponent === "Group" && <Group/>}
      {selectComponent === "Status" && <Status />}
      {selectComponent === "Channel" && <Channel />}
      {selectComponent === "Archive" && <Archive />}
      {selectComponent === "Star" && <Star />}
      {selectComponent === "Settings" && <Settings />}
      {selectComponent === "profile_Dp" && <ProfileSetting />}

      </div>
    </>
  );
}

export default SideDisplayChat;

