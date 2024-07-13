import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ChatSettings from "./Chat_settings/ChatSetting";
import FirstDisplay from "./firstDisplay/FirstDisplay";
import {
  DotsIcon,
  IconsIcon,
  MicrophoneIcon,
  PlusIcon,
  SearchIcon,
  VideoIcon,
} from "../Assets";
import WallpaperDisplay from "./wallpaperDisplay/WallpaperDisplay";

function DisplayContent({
  chatDisplay,
  selectedMessage,
  handleShowProfile,
  isWallpaper,
  hoverColor,
  backgroundHoverColor,
  doodlesOpacity,
}) {
  const [isClose, setIsClose] = useState(false);

  const handleOpenClose = () => {
    setIsClose(!isClose);
  };

  if (isWallpaper) {
    return (
      <WallpaperDisplay
        hoverColor={hoverColor}
        backgroundHoverColor={backgroundHoverColor}
        doodlesOpacity={doodlesOpacity}
      />
    );
  }

  return (
    <>
      <div className="display_content">
        {chatDisplay ? (
          <article style={{backgroundColor: backgroundHoverColor}}>
            <div className="background" style={{opacity: doodlesOpacity}}></div>
            <header>
              <div className="header_Dp">
                <img
                  src={selectedMessage.image}
                  style={{
                    objectFit: "cover",
                    height: "-webkit-fill-available",
                    width: "-webkit-fill-available",
                  }}
                />
              </div>
              <div className="header_name" onClick={handleShowProfile}>
                <span>{selectedMessage.name}</span>
                <span style={{ fontSize: 14, color: "#54656F" }}>
                  click here for contact info
                </span>
              </div>
              <div className="header_settings">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <span>
                    <VideoIcon />
                  </span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
                <div className="headSearch" style={{ cursor: "pointer" }}>
                  <span>
                    <SearchIcon style={{ height: 30, width: 30 }} />
                  </span>
                </div>
                <div
                  className="headThree_dots"
                  onClick={handleOpenClose}
                  style={{ backgroundColor: isClose ? "#D9DBDF" : "" }}
                >
                  <span>
                    <DotsIcon />
                  </span>
                </div>
              </div>
            </header>
            <main></main>
            <footer>
              <div className="footer_option">
                <div>
                  <span>
                    <IconsIcon />
                  </span>
                </div>
                <div>
                  <span>
                    <PlusIcon />
                  </span>
                </div>
              </div>
              <div className="footer_input">
                <div className="foot_input">
                  <input type="text" placeholder="Type a message" />
                </div>
                <div className="foot_microphone">
                  <span>
                    <MicrophoneIcon />
                  </span>
                </div>
              </div>
            </footer>
            <div>
              <ChatSettings isOpen={isClose} />
            </div>
          </article>
        ) : (
          <FirstDisplay />
        )}
      </div>
    </>
  );
}

export default DisplayContent;
