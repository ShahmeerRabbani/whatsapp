import React, { useState } from "react";
import ChatPage from "./Chat/Chat_page";
import AccountPage from "./Account/Account";
import PrivacyPage from "./Privacy/Privacy";
import NotificationPage from "./Notification/Notification";
import KeyboardPage from "./Keyboard/Keyboard";
import HelpPage from "./Help/Help";
import { AccountIcon, BellIcon, ChatFillIcon, HelpIcon, KeyboardIcon, LockIcon, LogOutIcon, SearchIcon } from "../../Assets";

function Settings() {
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
  };

  const handleBackButton = () => {
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

  const SettingsEventData = [
    {
      id: 1,
      name: "Account",
      icon: <AccountIcon/>,
      EventClick: () => handleShowComponent("Account"),
    },
    {
      id: 2,
      name: "Privacy",
      icon: <LockIcon />,
      EventClick: () => handleShowComponent("Privacy"),
    },
    {
      id: 3,
      name: "Chats",
      icon: <ChatFillIcon/>,
      EventClick: () => handleShowComponent("Chats"),
    },
    {
      id: 4,
      name: "Notification",
      icon: <BellIcon/>,
      EventClick: () => handleShowComponent("Notification"),
    },
    {
      id: 5,
      name: "Keyboard shortcut",
      icon: <KeyboardIcon/>,
      EventClick: () => handleShowComponent("Keyboard"),
    },
    {
      id: 6,
      name: "Help",
      icon: <HelpIcon/>,
      EventClick: () => handleShowComponent("Help"),
    },
    {
      id: 7,
      name: "Log out",
      style: {
        color: "#EA0038",
      },
      icon: <LogOutIcon style={{color: "#EA0038"}}/>,
    },
  ];
  return (
    <>
      <div className="Main_Settings_page">
        <div className="Settings_container" style={isStyle}>
          <div className="Main_settings_header">
            <div className="Settings_title">
              <span style={{ fontSize: 22, fontWeight: 700, marginLeft: 25 }}>
                Settings
              </span>
            </div>
            <div className="Settings_SearchInput">
              <div className="Settings_search">
                <div className="Search_Icon">
                  <SearchIcon />
                </div>
                <input
                  className="Settings_input"
                  type="text"
                  placeholder="Search settings"
                />
              </div>
            </div>
          </div>
          <div className="Settings_Option">
            <div className="Settings_firstLine">
              <div className="Settings_FirstLine_profile">
                <div className="Settings_Dp"></div>
              </div>
              <div className="Settings_FirstLine_About">
                <span>🖤</span>
                <span
                  style={{
                    width: "85%",
                    height: "20px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontSize: 14,
                    color: "#54656f",
                  }}
                >
                  Don't StuDy məH...😌❤ Yəw w0n't graduatə...❤🔥
                </span>
              </div>
            </div>

            {SettingsEventData.map((item, id) => {
              return (
                <div key={id}>
                  <div
                    className="Settings_SecondLine"
                    onClick={item.EventClick}
                  >
                    <div className="Settings_SecondLine_icon">
                      <div
                        style={{
                          height: "30px",
                          width: "30px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </div>
                    </div>
                    <div
                      className="Settings_SecondLine_event"
                      style={item.style}
                    >
                      {item.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="Second_Setting_Page" style={secondStyle}>
          {showSecondComponent === "Account" && (
            <AccountPage handleBackButton={handleBackButton} />
          )}
          {showSecondComponent === "Privacy" && (
            <PrivacyPage handleBackButton={handleBackButton} />
          )}
          {showSecondComponent === "Chats" && (
            <ChatPage handleBackButton={handleBackButton} />
          )}
          {showSecondComponent === "Notification" && (
            <NotificationPage handleBackButton={handleBackButton} />
          )}
          {showSecondComponent === "Keyboard" && (
            <KeyboardPage handleBackButton={handleBackButton} />
          )}
          {showSecondComponent === "Help" && (
            <HelpPage handleBackButton={handleBackButton} />
          )}
        </div>
      </div>
    </>
  );
}

export default Settings;
