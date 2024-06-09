import React from "react";
import { profile } from "../../../images";

function ProfileInformation({ isProfileShow, selectedMessage, handleShowProfile }) {
  const profileEventData = [
    {
      id: 1,
      icon: (
        <svg
          viewBox="0 0 16 15"
          height="20"
          preserveAspectRatio="xMidYMid meet"
          class=""
          version="1.1"
          x="0px"
          y="0px"
          enable-background="new 0 0 16 15"
        >
          <title>star</title>
          <path
            fill="currentColor"
            d="M8.3,10.2l-2.5,1.7c-0.3,0.2-0.8-0.1-0.7-0.5L6,8.6c0.1-0.2,0-0.4-0.2-0.5L3.5,6.3C3.1,6,3.3,5.5,3.7,5.5 l3-0.1c0.2,0,0.3-0.1,0.4-0.3l1-2.8c0.1-0.4,0.7-0.4,0.8,0l1,2.8c0.1,0.2,0.2,0.3,0.4,0.3l3,0.1c0.4,0,0.6,0.5,0.3,0.8l-2.4,1.8 C11.1,8.2,11,8.4,11,8.6l0.9,2.9c0.1,0.4-0.3,0.7-0.7,0.5l-2.5-1.7C8.6,10.1,8.4,10.1,8.3,10.2z"
          ></path>
        </svg>
      ),
      title: "Starred messages",
      arrow: (
        <path
          fill="currentColor"
          d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"
        ></path>
      ),
    },
    {
      id: 2,
      icon: (
        <svg
          viewBox="0 0 24 24"
          height="20"
          preserveAspectRatio="xMidYMid meet"
          class=""
          version="1.1"
          x="0px"
          y="0px"
          enable-background="new 0 0 24 24"
        >
          <title>settings-notifications</title>
          <path
            fill="currentColor"
            d="M12,21.7c0.9,0,1.7-0.8,1.7-1.7h-3.4C10.3,20.9,11.1,21.7,12,21.7z M17.6,16.5v-4.7 c0-2.7-1.8-4.8-4.3-5.4V5.8c0-0.7-0.6-1.3-1.3-1.3s-1.3,0.6-1.3,1.3v0.6C8.2,7,6.4,9.1,6.4,11.8v4.7l-1.7,1.7v0.9h14.6v-0.9 L17.6,16.5z"
          ></path>
        </svg>
      ),
      title: "Mute notification",
      arrow: false,
    },
    {
      id: 3,
      icon: (
        <svg
          viewBox="0 0 36 36"
          height="20"
          preserveAspectRatio="xMidYMid meet"
          class=""
          fill="none"
        >
          <title>disappearing</title>
          <path
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18 31.5C18.0909 31.5 18.1817 31.4991 18.2722 31.4973C19.1005 31.4809 19.7586 30.7961 19.7422 29.9679C19.7258 29.1396 19.041 28.4815 18.2128 28.4979C18.142 28.4993 18.0711 28.5 18 28.5V31.5ZM18 7.5C18.0711 7.5 18.142 7.5007 18.2128 7.50211C19.041 7.51853 19.7258 6.86039 19.7422 6.03213C19.7586 5.20387 19.1005 4.51912 18.2722 4.5027C18.1817 4.5009 18.0909 4.5 18 4.5V7.5ZM24.5153 6.17374C23.7901 5.77341 22.8776 6.03683 22.4772 6.76211C22.0769 7.48739 22.3403 8.39988 23.0656 8.8002C23.1891 8.86838 23.3111 8.93898 23.4316 9.01195C24.1401 9.44118 25.0625 9.21475 25.4917 8.5062C25.921 7.79765 25.6945 6.87529 24.986 6.44605C24.8311 6.35223 24.6742 6.26144 24.5153 6.17374ZM29.554 11.014C29.1247 10.3055 28.2024 10.079 27.4938 10.5083C26.7852 10.9375 26.5588 11.8599 26.9881 12.5684C27.061 12.6889 27.1316 12.8109 27.1998 12.9344C27.6001 13.6597 28.5126 13.9231 29.2379 13.5228C29.9632 13.1224 30.2266 12.2099 29.8263 11.4847C29.7386 11.3258 29.6478 11.1689 29.554 11.014ZM31.4973 17.7278C31.4809 16.8995 30.7961 16.2414 29.9679 16.2578C29.1396 16.2742 28.4815 16.959 28.4979 17.7872C28.4993 17.858 28.5 17.9289 28.5 18C28.5 18.0711 28.4993 18.142 28.4979 18.2128C28.4815 19.041 29.1396 19.7258 29.9679 19.7422C30.7961 19.7586 31.4809 19.1005 31.4973 18.2722C31.4991 18.1817 31.5 18.0909 31.5 18C31.5 17.9091 31.4991 17.8183 31.4973 17.7278ZM29.8263 24.5153C30.2266 23.7901 29.9632 22.8776 29.2379 22.4772C28.5126 22.0769 27.6001 22.3403 27.1998 23.0656C27.1316 23.1891 27.061 23.3111 26.9881 23.4316C26.5588 24.1401 26.7852 25.0625 27.4938 25.4917C28.2024 25.921 29.1247 25.6945 29.554 24.986C29.6478 24.8311 29.7386 24.6742 29.8263 24.5153ZM24.986 29.554C25.6945 29.1247 25.921 28.2024 25.4917 27.4938C25.0625 26.7852 24.1401 26.5588 23.4316 26.9881C23.3111 27.061 23.1891 27.1316 23.0656 27.1998C22.3403 27.6001 22.0769 28.5126 22.4772 29.2379C22.8776 29.9632 23.7901 30.2266 24.5153 29.8263C24.6742 29.7386 24.8311 29.6478 24.986 29.554Z"
          ></path>
          <path
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.0001 4.5C18 4.5 17.9999 4.5 17.9998 4.5C10.5439 4.5 4.49976 10.5442 4.49976 18C4.49976 25.4558 10.5439 31.5 17.9998 31.5C17.9999 31.5 18 31.5 18.0001 31.5V28.5C18 28.5 17.9999 28.5 17.9998 28.5C12.2008 28.5 7.49976 23.799 7.49976 18C7.49976 12.201 12.2008 7.5 17.9998 7.5C17.9999 7.5 18 7.5 18.0001 7.5V4.5Z"
          ></path>
          <path
            fill="currentColor"
            d="M23.3247 12.0107C23.669 11.7525 24.1507 11.7867 24.455 12.091V12.091C24.7593 12.3953 24.7935 12.877 24.5353 13.2213L19.9714 19.3066C19.2589 20.2566 17.8701 20.3553 17.0304 19.5156V19.5156C16.1907 18.6759 16.2894 17.2871 17.2394 16.5746L23.3247 12.0107Z"
          ></path>
        </svg>
      ),
      title: "Disappearing messages",
      arrow: (
        <path
          fill="currentColor"
          d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"
        ></path>
      ),
    },
    {
      id: 4,
      icon: (
        <svg
          viewBox="0 0 24 24"
          height="20"
          preserveAspectRatio="xMidYMid meet"
          class=""
          version="1.1"
          x="0px"
          y="0px"
          enable-background="new 0 0 24 24"
        >
          <title>lock</title>
          <path
            fill="currentColor"
            d="M17.3,7.6h-0.9V5.8c0-2.5-1.9-4.4-4.4-4.4S7.6,3.3,7.6,5.8v1.8H6.7c-1,0-1.8,0.8-1.8,1.8v8.9 c0,1,0.8,1.8,1.8,1.8h10.6c1,0,1.8-0.8,1.8-1.8V9.4C19.1,8.4,18.3,7.6,17.3,7.6z M12,15.8c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S13.1,15.8,12,15.8z M14.7,7.6H9.2V5.8c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7v1.8C14.6,7.6,14.7,7.6,14.7,7.6z"
          ></path>
        </svg>
      ),
      title: "Encyption",
      arrow: false,
    },
  ];

  const deleteData = [
    {
      id: 1,
      title: `Block ${selectedMessage.name}`,
      icon: (
        <svg
          viewBox="0 0 24 24"
          height="24"
          width="24"
          preserveAspectRatio="xMidYMid meet"
          className=""
          fill="none"
        >
          <title>settings-blocked</title>
          <path
            d="M12 2.3C6.7 2.3 2.3 6.6 2.3 12C2.3 17.4 6.6 21.7 12 21.7C17.4 21.7 21.7 17.4 21.7 12C21.7 6.6 17.3 2.3 12 2.3ZM4.7 12C4.7 8 8 4.7 12 4.7C13.6 4.7 15.1 5.2 16.3 6.1L6.1 16.3C5.2 15.1 4.7 13.6 4.7 12ZM12 19.3C10.4 19.3 9 18.8 7.8 17.9L17.9 7.8C18.8 9 19.3 10.4 19.3 12C19.3 16 16 19.3 12 19.3Z"
            fill="currentColor"
            style={{ fillOpacity: 1 }}
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: `Report ${selectedMessage.name}`,
      icon: (
        <svg
          viewBox="0 0 24 24"
          height="24"
          width="24"
          preserveAspectRatio="xMidYMid meet"
          class=""
          version="1.1"
          x="0px"
          y="0px"
          enable-background="new 0 0 24 24"
        >
          <title>thumbs-down</title>
          <g>
            <g id="thumb-down">
              <path
                fill="currentColor"
                d="M14.091,4.2H6.318c-0.691,0-1.295,0.432-1.555,1.036l-2.591,6.132C2.086,11.541,2,11.714,2,11.973v1.641 l0,0V13.7c0,0.95,0.777,1.727,1.727,1.727h5.441L8.305,19.4c0,0.086,0,0.173,0,0.259c0,0.345,0.173,0.691,0.345,0.95l0.95,0.864 l5.7-5.7c0.345-0.345,0.518-0.777,0.518-1.209V5.927C15.818,4.977,15.041,4.2,14.091,4.2z M17.545,4.2v10.364H21V4.2H17.545z"
              ></path>
            </g>
          </g>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Delete chat",
      icon: (
        <svg
          viewBox="0 0 24 24"
          height="24"
          width="24"
          preserveAspectRatio="xMidYMid meet"
          class=""
          version="1.1"
          x="0px"
          y="0px"
          enable-background="new 0 0 24 24"
        >
          <title>delete</title>
          <path
            fill="currentColor"
            d="M6,18c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V6H6V18z M19,3h-3.5l-1-1h-5l-1,1H5v2h14V3z"
          ></path>
        </svg>
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
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              className=""
              fill="currentColor"
              enableBackground="new 0 0 24 24"
            >
              <title>Close</title>
              <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
            </svg>
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
              <svg
                viewBox="0 0 10 21"
                height="21"
                width="10"
                preserveAspectRatio="xMidYMid meet"
                className=""
                version="1.1"
                x="0px"
                y="0px"
                enableBackground="new 0 0 10 21"
              >
                <title>chevron-right-alt</title>
                <path
                  fill="currentColor"
                  d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"
                ></path>
              </svg>
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
                      <svg
                        viewBox="0 0 10 21"
                        height="21"
                        width="10"
                        preserveAspectRatio="xMidYMid meet"
                        className=""
                        version="1.1"
                        x="0px"
                        y="0px"
                        enableBackground="new 0 0 10 21"
                      >
                        <title>chevron-right-alt</title>
                        {item.arrow}
                      </svg>
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
