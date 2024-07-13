import React, { useState } from "react";
import Chat from "../ChatComponent/Chat";
import Group from "../Group/Group";
import Status from "../Status/Status";
import Channel from "../Channel/Channel";
import Archive from "../Archive/Archive";
import Star from "../Star/Star";
import Settings from "../Settings/Settings";
import {
  ChatProfileEight,
  ChatProfileEleven,
  ChatProfileFive,
  ChatProfileFour,
  ChatProfileOne,
  ChatProfileSeven,
  ChatProfileSix,
  ChatProfileTen,
  ChatProfileThree,
  ChatProfileTwo,
  chatProfileFifteen,
  chatProfileFourteen,
  chatProfileNine,
  chatProfileThirteen,
  chatProfileTwelve,
  profile,
} from "../../Assets/images";
import ProfileSetting from "../ProfileSetting/Profile";
function SideDisplayChat({
  selectComponent,
  handleDisplay,
  onMessageClick,
  handleWallpaper,
  handleRemoveWallpaperPage,
  handleHoverColor,
  handleMouseLeave,
  handleMouseEnter,
  activeChild,
}) {
  // const [settingsDisplay, setSettingsDisplay] = useState('');

  // const handleSettingsDisplay = (componentName) => {
  //   setSettingsDisplay(componentName)
  // }

  const fakeChatData = [
    {
      id: 1,
      name: "Shahmeer",
      message: "Dear BanoQabil Karachi Student!",
      time: "Saturday",
      statusTiming: "Now",
      image: profile,
    },
    {
      id: 2,
      name: "Haris Sharjeel",
      message: "Dear BanoQabil Karachi Student!Dear BanoQabil Karachi Student!",
      time: "Saturday",
      image: ChatProfileOne,
      statusTiming: "1 minutes ago",
    },
    {
      id: 3,
      name: "Yasir",
      message: "Dear BanoQabil Karachi Student!",
      time: "Saturday",
      image: ChatProfileTwo,
      statusTiming: "50 minutes ago",
    },
    {
      id: 4,
      name: "Hashir",
      message: "Dear BanoQabil Karachi Student!Dear BanoQabil Karachi Student!",
      time: "Saturday",
      image: ChatProfileThree,
      statusTiming: "Now",
    },
    {
      id: 5,
      name: "Hammad Imam",
      message: "Dear BanoQabil Karachi Student!",
      time: "Saturday",
      image: ChatProfileFour,
      statusTiming: "20 minutes ago",
    },
    {
      id: 6,
      name: "Iqbal Ahmed",
      message: "Dear BanoQabil Karachi Student!Dear BanoQabil Karachi Student!",
      time: "Saturday",
      image: ChatProfileFive,
      statusTiming: "Yesterday 7:00 AM",
    },
    {
      id: 7,
      name: "Sufiyan Javed",
      message: "Dear BanoQabil Karachi Student!",
      time: "Saturday",
      image: ChatProfileSix,
      statusTiming: "40 minutes ago",
    },
    {
      id: 8,
      name: "Kaif",
      message: "Dear BanoQabil Karachi Student!Dear BanoQabil Karachi Student!",
      time: "Saturday",
      image: ChatProfileSeven,
      statusTiming: "Yesterday 3:20 PM",
    },
    {
      id: 9,
      name: "Osama Riaz",
      message: "Dear BanoQabil Karachi Student!",
      time: "Saturday",
      image: ChatProfileEight,
      statusTiming: "Today 1:20 PM",
    },
    {
      id: 10,
      name: "Mahanoor",
      message: "Dear BanoQabil Karachi Student!Dear BanoQabil Karachi Student!",
      time: "Saturday",
      image: chatProfileNine,
      statusTiming: "Now",
    },
    {
      id: 11,
      name: "Afham",
      message: "Dear BanoQabil Karachi Student!",
      time: "Saturday",
      image: ChatProfileTen,
      statusTiming: "Today 8:20 PM",
    },
    {
      id: 12,
      name: "Shayan",
      message: "Dear BanoQabil Karachi Student!Dear BanoQabil Karachi Student!",
      time: "Saturday",
      image: ChatProfileEleven,
      statusTiming: "Yesterday 5:50 PM",
    },
    {
      id: 13,
      name: "Javed",
      message: "Dear BanoQabil Karachi Student!",
      time: "Saturday",
      image: chatProfileTwelve,
      statusTiming: "Today 3:20 PM",
    },
    {
      id: 14,
      name: "Wajahat",
      message: "Dear BanoQabil Karachi Student!Dear BanoQabil Karachi Student!",
      time: "Saturday",
      image: chatProfileThirteen,
      statusTiming: "Today 2:40 AM",
    },
    {
      id: 15,
      name: "Ali",
      message: "Dear BanoQabil Karachi Student!",
      time: "Saturday",
      image: chatProfileFourteen,
      statusTiming: "Yesterday 3:12 PM",
    },
    {
      id: 16,
      name: "Hamza",
      message: "Dear BanoQabil Karachi Student!",
      time: "Saturday",
      image: chatProfileFifteen,
      statusTiming: "10 minutes ago",
    },
  ];

  return (
    <>
      <div className="Main_SideDisplay">
        {selectComponent === "Chat" && (
          <Chat
            handleDisplay={handleDisplay}
            onMessageClick={onMessageClick}
            fakeChatData={fakeChatData}
          />
        )}
        {selectComponent === "Group" && <Group />}
        {selectComponent === "StatusBtn" && (
          <Status fakeChatData={fakeChatData} />
        )}
        {selectComponent === "Channel" && <Channel />}
        {selectComponent === "Archive" && <Archive />}
        {selectComponent === "Star" && <Star />}
        {selectComponent === "Settings" && (
          <Settings
            handleWallpaper={handleWallpaper}
            handleRemoveWallpaperPage={handleRemoveWallpaperPage}
            handleHoverColor={handleHoverColor}
            handleMouseLeave={handleMouseLeave}
            handleMouseEnter={handleMouseEnter}
            activeChild={activeChild}
          />
        )}
        {selectComponent === "profile_Dp" && <ProfileSetting />}
      </div>
    </>
  );
}

export default SideDisplayChat;
