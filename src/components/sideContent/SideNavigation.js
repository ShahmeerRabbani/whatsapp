import React, { useState } from "react";
import SideSettings from "./sideSettings/SideSettings";
import SideDisplayChat from "./sideDisplayChat/SideDisplayChat";

function SideContent({
  handleDisplay,
  onMessageClick,
  handleWallpaper,
  handleRemoveWallpaperPage,
  handleHoverColor,
  handleMouseLeave,
  handleMouseEnter,
  activeChild,
}) {
  const [selectComponent, setSelectComponent] = useState("Chat");

  const handleButtonClick = (componentName) => {
    setSelectComponent(componentName);
  };

  return (
    <>
      <div className="side_content">
        <SideSettings 
        handleButtonClick={handleButtonClick}
        selectComponent={selectComponent}
        handleRemoveWallpaperPage={handleRemoveWallpaperPage} />
        <SideDisplayChat
          selectComponent={selectComponent}
          handleDisplay={handleDisplay}
          onMessageClick={onMessageClick}
          handleWallpaper={handleWallpaper}
          handleRemoveWallpaperPage={handleRemoveWallpaperPage}
          handleHoverColor={handleHoverColor}
          handleMouseLeave={handleMouseLeave}
          handleMouseEnter={handleMouseEnter}
          activeChild={activeChild}
        />
      </div>
    </>
  );
}

export default SideContent;
