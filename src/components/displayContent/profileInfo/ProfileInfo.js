import React from "react";
import { profile } from "../../../images";
import { BellIcon, BlockIcon, CrossIcon, DeleteIcon, DisappearingIcon, LockIcon, RightArrow, StarFillIcon, UnlikeIcon } from "../../Assets";

function ProfileInformation({ isProfileShow, selectedMessage, handleShowProfile }) {
  const profileEventData = [
    {
      id: 1,
      icon: (
        <StarFillIcon/>
      ),
      title: "Starred messages",
      arrow: (
        <RightArrow/>
      ),
    },
    {
      id: 2,
      icon: (
       <BellIcon style={{height: 20, width: 20}}/>
      ),
      title: "Mute notification",
      arrow: false,
    },
    {
      id: 3,
      icon: (
        <DisappearingIcon/>
      ),
      title: "Disappearing messages",
      arrow: (
        <RightArrow/>
      ),
    },
    {
      id: 4,
      icon: (
       <LockIcon style={{height: 20, width: 20}}/>
      ),
      title: "Encryption",
      arrow: false,
    },
  ];

  const deleteData = [
    {
      id: 1,
      title: `Block ${selectedMessage.name}`,
      icon: (
       <BlockIcon/>
      ),
    },
    {
      id: 2,
      title: `Report ${selectedMessage.name}`,
      icon: (
       <UnlikeIcon/>
      ),
    },
    {
      id: 3,
      title: "Delete chat",
      icon: (
       <DeleteIcon/>
      ),
    },
  ];
  return (
    <>
      <div
        className="profile_info"
        style={{ display: isProfileShow ? "flex" : "none" }}
      >
        <div className="close_profile">
          <span className="close_button" onClick={handleShowProfile}>
           <CrossIcon/>
          </span>
          <div>
            <span style={{ marginLeft: 30, color: "black" }}>Contact Info</span>
          </div>
        </div>
        <div className="profile_dp">
          <div className="Big_Image">
            <img
              src={selectedMessage.image}
              style={{
                objectFit: "cover",
                height: "-webkit-fill-available",
                width: "-webkit-fill-available",
              }}
            />
          </div>
          <span style={{ fontSize: "25px", color: "#3B4A54", marginBottom: 2 }}>
            {selectedMessage.name}
          </span>
          <span
            style={{ fontSize: 15, color: "#54656F", letterSpacing: "1px" }}
          >
            +92 317 2980810
          </span>
        </div>
        <div className="profile_about">
          <div className="about_heading">
            <span>About</span>
          </div>
          <div className="about">
            <span>ALHAMDULLILAH ✨FOR EVERYTHING</span>
          </div>
        </div>
        <div className="profile_media-links">
          <div
            style={{
              display: "flex",
              flex: 4,
              alignItems: "center",
              padding: "0 30px",
              color: "#667781",
              cursor: "pointer",
            }}
          >
            <span>Media, links and docs</span>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#667781",
            }}
          >
            <div>
              <span>0</span>
            </div>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 1,
              }}
            >
              <RightArrow/>
            </span>
          </div>
        </div>
        <div className="profile_events">
          {profileEventData.map((item, id) => {
            return (
              <div key={id}>
                <div className="profile_starMessage">
                  <div
                    style={{
                      display: "flex",
                      flex: 5,
                      alignItems: "center",
                      paddingLeft: "50px",
                      color: "#667781",
                      cursor: "pointer",
                      alignItems: "center",
                      fontSize: 17,
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 15,
                      }}
                    >
                      {item.icon}
                    </span>
                    <span>{item.title}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#667781",
                      cursor: "pointer",
                    }}
                  >
                    <span>
                        {item.arrow}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

         {deleteData.map((item, id) => {
          return(
            <div key={id}>
               <div className="profile_delete">
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "50px",
                marginRight: "15px",
              }}
            >
              {item.icon}
            </span>
            <span>{item.title}</span>
          </div>
            </div>
          )
         })}
        </div>
      </div>
    </>
  );
}

export default ProfileInformation;
