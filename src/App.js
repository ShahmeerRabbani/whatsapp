import React, { useState } from "react";
import "./App.css";
import { DisplayContent, ProfileInformation, SideContent } from "./components";

function App() {
  const [chatDisplay, setChatDisplay] = useState(false);

  const handleDisplay = () => {
    setChatDisplay(true);
  };

  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleSelectedMessage = (message) => {
    setSelectedMessage(message);
  };

  const [profileInformation, setProfileInformation] = useState(false);

  const handleShowProfile = () => {
    setProfileInformation(!profileInformation);
  };
  return (
    <>
      <div className="App">
        <SideContent
          handleDisplay={handleDisplay}
          onMessageClick={handleSelectedMessage}
        />
        <DisplayContent
          chatDisplay={chatDisplay}
          selectedMessage={selectedMessage}
          handleShowProfile={handleShowProfile}
        />
        <ProfileInformation isProfileShow = {profileInformation} selectedMessage={selectedMessage}/>
      </div>
    </>
  );
}

export default App;
