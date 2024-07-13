import React, { useState } from "react";
import { LeftArrowIcon, RightArrow } from "../../../Assets/index.js";
import Wallpaper from "./wallpaper/Wallpaper.js";
import Theme from "./theme/Theme.js";

function ChatPage({
  handleBackButton,
  handleWallpaper,
  handleRemoveWallpaperPage,
  handleHoverColor,
  handleMouseLeave,
  handleMouseEnter,
  activeChild,
  
}) {
  const [isStyle, setIsStyle] = useState({});
  const [secondStyle, setSecondStyle] = useState({});
  const [showSecondComponent, setShowSecondComponent] = useState("");

  const handleShowComponent = (navigateName) => {
    setIsStyle({
      transform: "translateX(-100%)",
      transition: "transform 0.3s ease",
    });
    setSecondStyle({
      transform: "translateX(0%)",
      transition: "transform 0.3s ease",
    });
    setShowSecondComponent(navigateName);
    if(navigateName === 'Wallpaper'){
      handleWallpaper()
    }
    else{
      return;
    }
  };

  const handleNewBack = () => {
    setIsStyle({
      transform: "translateX(0%)",
      transition: "transform 0.3s ease",
    });
    setSecondStyle({
      transform: "translateX(100%)",
      transition: "transform 0.3s ease",
    });
    // setShowSecondComponent('')
  };

  return (
    <>
      <div className="Chat_Page_main">
        <div className="chat_container" style={isStyle}>
          <div className="upper_chatDiv">
            <div className="backButton">
              <span
                style={{ fontSize: 22, cursor: "pointer" }}
                onClick={handleBackButton}
              >
                <LeftArrowIcon />
              </span>
              <span style={{ marginLeft: 20, fontSize: 16 }}>Chats</span>
            </div>
            <span style={{ fontSize: 14, color: "#017561" }}>Display</span>
            <div className="Theme" onClick={() => handleShowComponent("Theme")}>
              <div className="theme-title">
                <span>Theme</span>
                <span style={{ fontSize: 14, color: "#54656f" }}>
                  Light mode
                </span>
              </div>
              <div className="theme-arrow">
                <RightArrow />
              </div>
            </div>
            <div
              className="Wallpaper"
              onClick={() => handleShowComponent("Wallpaper")}
            >
              <div className="wallpaper_title">
                <span style={{ fontSize: 15 }}>Wallpaper</span>
              </div>
              <div className="wallpaper_arrow">
                <RightArrow />
              </div>
            </div>
          </div>
          <div className="lower_chatDiv"></div>
        </div>

        <div className="Second_Setting_Page" style={secondStyle}>
          {showSecondComponent === "Wallpaper" && (
            <Wallpaper
              handleNewBack={handleNewBack}
              handleRemoveWallpaperPage={handleRemoveWallpaperPage}
              handleHoverColor={handleHoverColor}
              handleMouseLeave={handleMouseLeave}
              handleMouseEnter={handleMouseEnter}
              activeChild={activeChild}
            />
          )}
          {showSecondComponent === "Theme" && (
            <Theme handleNewBack={handleNewBack} />
          )}
        </div>
      </div>
    </>
  );
}

export default ChatPage;
