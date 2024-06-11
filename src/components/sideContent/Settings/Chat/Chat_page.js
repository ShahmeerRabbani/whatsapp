import React from "react";
import {LeftArrowIcon} from '../../../Assets/index.js'

function ChatPage({ handleBackButton }) {
  return (
    <>
      <div className="Chat_Page_main">
        <div className="chat_container">
          <div className="upper_chatDiv">
            <div className="backButton">
              <span
                style={{ fontSize: 22, cursor: "pointer" }}
                onClick={handleBackButton}
              >
                <LeftArrowIcon/>
              </span>
              <span style={{ marginLeft: 20, fontSize: 16 }}>Chats</span>
            </div>
            <span style={{ fontSize: 14, color: "#017561" }}>Display</span>
            <div className="Theme"></div>
            <div className="Wallpaper"></div>
          </div>
          <div className="lower_chatDiv"></div>
        </div>
      </div>
    </>
  );
}

export default ChatPage;
