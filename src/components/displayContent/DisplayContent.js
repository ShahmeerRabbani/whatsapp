import React, { useEffect, useState } from "react";
import { profile } from "../../images";
import { IoIosArrowDown } from "react-icons/io";
import ChatSettings from "./Chat_settings/ChatSetting";
import FirstDisplay from "./firstDisplay/FirstDisplay";

function DisplayContent({ chatDisplay, selectedMessage, handleShowProfile }) {
  const [isClose, setIsClose] = useState(false);

  const handleOpenClose = () => {
    setIsClose(!isClose);
  };

  return (
    <>
      <div className="display_content">
        {chatDisplay ? (
          <article>
            <div className="background"></div>
            <header>
              <div className="header_Dp">
                <img
                  src={profile}
                  style={{
                    objectFit: "cover",
                    height: "-webkit-fill-available",
                    width: "-webkit-fill-available",
                  }}
                />
              </div>
              <div className="header_name" onClick={handleShowProfile}>
                <span>{selectedMessage.name}</span>
                <span style={{fontSize: 14, color: '#54656F', }}>click here for contact info</span>
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
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      preserveAspectRatio="xMidYMid meet"
                      className="currentColor"
                      fill="none"
                    >
                      <title>video-call</title>
                      <path
                        d="M3.27096 7.31042C3 7.82381 3 8.49587 3 9.84V14.16C3 15.5041 3 16.1762 3.27096 16.6896C3.5093 17.1412 3.88961 17.5083 4.35738 17.7384C4.88916 18 5.58531 18 6.9776 18H13.1097C14.502 18 15.1982 18 15.7299 17.7384C16.1977 17.5083 16.578 17.1412 16.8164 16.6896C17.0873 16.1762 17.0873 15.5041 17.0873 14.16V9.84C17.0873 8.49587 17.0873 7.82381 16.8164 7.31042C16.578 6.85883 16.1977 6.49168 15.7299 6.26158C15.1982 6 14.502 6 13.1097 6H6.9776C5.58531 6 4.88916 6 4.35738 6.26158C3.88961 6.49168 3.5093 6.85883 3.27096 7.31042Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.7308 9.60844C18.5601 9.75994 18.4629 9.97355 18.4629 10.1974V13.8026C18.4629 14.0264 18.5601 14.2401 18.7308 14.3916L20.9567 16.3669C21.4879 16.8384 22.3462 16.4746 22.3462 15.778V8.22203C22.3462 7.52542 21.4879 7.16163 20.9567 7.63306L18.7308 9.60844Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
                <div className="headSearch" style={{ cursor: "pointer" }}>
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      preserveAspectRatio="xMidYMid meet"
                      className="currentColor"
                      version="1.1"
                      x="0px"
                      y="0px"
                      enableBackground="new 0 0 24 24"
                    >
                      <title>search-alt</title>
                      <path
                        fill="currentColor"
                        d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div
                  className="headThree_dots"
                  onClick={handleOpenClose}
                  style={{ backgroundColor: isClose ? "#D9DBDF" : "" }}
                >
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      preserveAspectRatio="xMidYMid meet"
                      className="currentColor"
                      version="1.1"
                      x="0px"
                      y="0px"
                      enableBackground="new 0 0 24 24"
                    >
                      <title>menu</title>
                      <path
                        fill="currentColor"
                        d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </header>
            <main>
              
            </main>
            <footer>
              <div className="footer_option">
                <div>
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      preserveAspectRatio="xMidYMid meet"
                      className="x23j0i4 xd7y6wv"
                      version="1.1"
                      x="0px"
                      y="0px"
                      enableBackground="new 0 0 24 24"
                    >
                      <title>smiley</title>
                      <path
                        fill="currentColor"
                        d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div>
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      preserveAspectRatio="xMidYMid meet"
                      className=""
                      fill="none"
                    >
                      <title>attach-menu-plus</title>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.5 13.2501L20.5 10.7501L13.25 10.7501L13.25 3.5L10.75 3.5L10.75 10.7501L3.5 10.7501L3.5 13.2501L10.75 13.2501L10.75 20.5L13.25 20.5L13.25 13.2501L20.5 13.2501Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="footer_input">
                <div className="foot_input">
                  <input type="text" placeholder="Type a message" />
                </div>
                <div className="foot_microphone">
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      preserveAspectRatio="xMidYMid meet"
                      className=""
                      version="1.1"
                      x="0px"
                      y="0px"
                      enableBackground="new 0 0 24 24"
                    >
                      <title>ptt</title>
                      <path
                        fill="currentColor"
                        d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"
                      ></path>
                    </svg>
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
