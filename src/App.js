import React, { useState } from "react";
import "./App.css";
import { DisplayContent, ProfileInformation, SideContent } from "./components";

function App() {
  const [chatDisplay, setChatDisplay] = useState(false);

  const handleDisplay = () => {
    setChatDisplay(true);
  };

  const [selectedMessage, setSelectedMessage] = useState('');

  const handleSelectedMessage = (message) => {
    setSelectedMessage(message);
  };

  const [profileInformation, setProfileInformation] = useState(false);

  const handleShowProfile = () => {
    setProfileInformation(!profileInformation);
  };

  // For Wallpaper ------------

  const [isWallpaper, setIsWallpaper] = useState(false);

  const handleWallpaper = () => {
    setIsWallpaper(true);
  }

  const handleRemoveWallpaperPage = () => {
    setIsWallpaper(false);
  }
  
  const [hoverColor, setHoverColor] = useState('');
  const [hoverClick, setHoverClick] = useState('')
  const [doodlesOpacity, setDoodlesOpacity] =useState('')
  const [activeChild, setActiveChild] = useState(null)

  const handleHoverColor = (colorName, id, doodles) => {
    setHoverColor(colorName);
    setHoverClick(colorName)
    setActiveChild(id)
    setDoodlesOpacity(doodles)
  }

  const handleMouseEnter = (colorName, doodles) => {
    if (!hoverClick) {
      setHoverClick(colorName);
    }
    setDoodlesOpacity(doodles)
  };
  
  const handleMouseLeave = () => {
    if (hoverClick) {
      setHoverClick('');
    }
  };

  const backgroundHoverColor = hoverClick || hoverColor || '';


  return (
    <>
      <div className="App">
        <SideContent
          handleDisplay={handleDisplay}
          onMessageClick={handleSelectedMessage}
          handleWallpaper = {handleWallpaper}
          handleRemoveWallpaperPage = {handleRemoveWallpaperPage}
          handleHoverColor={handleHoverColor}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          activeChild={activeChild}
          />
        <DisplayContent
          chatDisplay={chatDisplay}
          selectedMessage={selectedMessage}
          handleShowProfile={handleShowProfile}
          isWallpaper = {isWallpaper}
          hoverColor= {hoverColor}
          doodlesOpacity={doodlesOpacity}
          backgroundHoverColor={backgroundHoverColor}
        />
        <ProfileInformation isProfileShow = {profileInformation} selectedMessage={selectedMessage} handleShowProfile={handleShowProfile}/>
      </div>
    </>
  );
}

export default App;
