import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { CreateIcon, DotsIcon, FilterIcon, SearchIcon } from '../../Assets';
function Chat({handleDisplay, onMessageClick, fakeChatData}) {


  

    return ( 
        <>
         <div className="SideChat">
        <div className="SearchRow">
          <div className="searchOption">
            <div>
              <span style={{ fontSize: "22px", fontWeight: "bold" }}>
                Chats
              </span>
            </div>
            <div
              style={{
                display: "flex",
                width: "120px",
                alignItems: 'center',
                justifyContent: "space-around",
              }}
            >
              <div className='meta_ai' title='Meta AI'>
                <img style={{height: 20, width: 20, }} src="https://static.whatsapp.net/rsrc.php/v3/ye/r/W2MDyeo0zkf.png"/>
              </div>
              <div className="NewChat">
                 
                  <CreateIcon/>
                 
              </div>
              <div className="Menu">
                 
                  <DotsIcon/>
                 
              </div>
            </div>
          </div>
          <div className="searchBar">
            <div className="Search">
              <div className="Search_Icon">
                 
                  <SearchIcon/>
                 
              </div>
              <input
                className="search_input"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="unRead">
               
               <FilterIcon/>
               
            </div>
          </div>
        </div>
        <div className="ChatRow">
         <div className="ChatRow_Child">
         
         {fakeChatData.map((item, index) => {
            return (
              <div key={index} onClick={() => onMessageClick(item)}>
          <div className="ChatBox" onClick={handleDisplay}>
            <div className="user_dp">
              <div className="Dp">
                <img src={item.image} style={{objectFit: 'cover', height: '-webkit-fill-available', width: '-webkit-fill-available'}}/>
              </div>
            </div>
            <div className="user_name">
              <div className="user_nameHeading">
                <span style={{fontSize: '17px'}}>{item.name}</span>
                <span style={{color: "#667781", fontSize: '12px'}}>{item.time}</span>
              </div>
              <div className="notify_chat">
                <span style={{fontSize: '14px', color: "#667781", textOverflow: 'ellipsis', width: '270px', overflow: 'hidden', whiteSpace: 'nowrap'}}>{item.message}</span>
                <span className="dropdown_arrow">
                  <IoIosArrowDown/>
                </span>
              </div>
            </div>
          </div>
              </div>
            )
          })}
         </div>
        </div>
        </div>
        </>
     );
}

export default Chat;