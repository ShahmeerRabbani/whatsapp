import React from "react";
import profile from '../../../images/profile.jpeg'
import { MarkZuckerberg, callOfDuty, UEFA, worldHealth, Billie } from "../../../images";
import { PlusIcon } from "../../Assets";

function Channel() {
  const channelData = [
    {
      id: 1,
      dp: callOfDuty,
      channelName: "Call Of Duty",
      followers: "7.8M followers",
      icon: (
        <PlusIcon style={{color: '#00A884'}}/>
      ),
    },
    {
      id: 2,
      dp: MarkZuckerberg,
      channelName: "Mark Zuckerberg",
      followers: "17.5M followers",
      icon: (
        <PlusIcon style={{color: '#00A884'}}/>
      ),
    },
    {
      id: 3,
      dp: worldHealth,
      channelName: "World Health Organization",
      followers: "156.4M followers",
      icon: (
        <PlusIcon style={{color: '#00A884'}}/>
      ),
    },
    {
      id: 4,
      dp: UEFA,
      channelName: "UEFA EURO 2024",
      followers: "5.1M followers",
      icon: (
        <PlusIcon style={{color: '#00A884'}}/>
      ),
    },
    {
      id: 5,
      dp: Billie,
      channelName: "Billie Eilish Home",
      followers: "3.6M followers",
      icon: (
        <PlusIcon style={{color: '#00A884'}}/>
      ),
    },
  ];

  return (
    <>
      <div className="channel_main">
        <div className="upper_channel">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <span style={{ fontSize: 22, fontWeight: 700 }}>Channels</span>
            <span style={{ cursor: "pointer" }}>
              <PlusIcon/>
            </span>
          </div>
          <span style={{ fontSize: 20 }}>
            Stay updated on your favorite topics
          </span>
          <span style={{ fontSize: 17, color: "#54656f" }}>
            Finds channels to follow below
          </span>
        </div>
        <div className="lower_channel">
          {channelData.map((item, id) => {
            return (
              <div key={id}>
                <div className="channel_box">
                  <div className="channel_imageParent">
                    <div className="channel_image">
                      <img src={item.dp} style={{objectFit: 'cover', height: '-webkit-fill-available', width: '-webkit-fill-available'}}/>
                    </div>
                  </div>
                  <div className="channel_names">
                    <span style={{ fontSize: 16 }}>{item.channelName}</span>
                    <span style={{ fontSize: 14, color: "#54656f" }}>
                     {item.followers}
                    </span>
                  </div>
                  <div className="channel_plus">
                    <span>
                        {item.icon}
                    </span>
                  </div>
                </div>
                <hr style={{opacity: '0.3'}}/>
              </div>
            );
          })}
        <div style={{marginTop: 20, textAlign: 'center'}}>
        <button className="store_btn">Discover more</button>

        </div>
        </div>
      </div>
    </>
  );
}

export default Channel;
