import React from "react";
import profile from "../../../images/profile.jpeg";
import { FaLock } from "react-icons/fa6";

function Status({ fakeChatData }) {
  // const StatusData = [
  //     {
  //         id: 1,
  //         name: 'Hashir',
  //         image: profile,
  //         timing: 'Today 8:20 PM'

  //     },
  //     {
  //         id: 2,
  //         name: 'Ali',
  //         image: profile,
  //         timing: 'Yesterday 5:50 PM'

  //     },
  //     {
  //         id: 3,
  //         name: 'Shahrukh',
  //         image: profile,
  //         timing: 'Today 3:20 PM'

  //     },
  //     {
  //         id: 4,
  //         name: 'Sameer',
  //         image: profile,
  //         timing: 'Today 2:40 AM'

  //     },
  //     {
  //         id: 4,
  //         name: 'Sufiyan',
  //         image: profile,
  //         timing: 'Yesterday 3:12 PM'

  //     },
  //     {
  //         id: 5,
  //         name: 'Hammad',
  //         image: profile,
  //         timing: 'Now'

  //     },
  //     {
  //         id: 6,
  //         name: 'Hashir',
  //         image: profile,
  //         timing: '10 minutes ago'

  //     },
  // ]
  return (
    <>
      <div className="Main_Status">
        <div className="Status_header">
          <span style={{ fontSize: 22, fontWeight: 700 }}>Status</span>
        </div>
        <div className="Status_body">
          <div className="My_Status">
            <div className="my_Status_Display">
              <div className="my_Status_Image">
                <img
                  src={profile}
                  style={{
                    objectFit: "cover",
                    height: "-webkit-fill-available",
                    width: "-webkit-fill-available",
                  }}
                />
              </div>
            </div>
            <div className="my_Status_text">
              <span>My status</span>
              <span style={{ fontSize: 12, color: "#54656f" }}>No updates</span>
            </div>
          </div>
          <div className="Others_status">
            <div
              style={{
                height: 70,
                display: "flex",
                alignItems: "center",
                paddingLeft: 30,
              }}
            >
              <span style={{ color: "#017561", fontSize: 16 }}>RECENT</span>
            </div>
            {fakeChatData.map((item, id) => {
              return (
                <div key={id}>
                  <div className="Others_updates">
                    <div className="Others_display">
                      <div className="Others_Image">
                        <img
                          src={item.image}
                          style={{
                            objectFit: "cover",
                            height: "-webkit-fill-available",
                            width: "-webkit-fill-available",
                          }}
                        />
                      </div>
                    </div>
                    <div className="Others_text">
                      <span style={{ fontSize: 17 }}>{item.name}</span>
                      <span style={{ fontSize: 14, color: "#54656f" }}>
                        {item.statusTiming}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            <div
              style={{ textAlign: "center", width: "100%", marginTop: "40px" }}
            >
              <span
                style={{
                  fontSize: 12,
                  color: "#54656f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                }}
              >
                <FaLock size={11} /> Your status updates are
                <span style={{ color: "#027EC6", cursor: "pointer" }}>
                  end-to-end encrypted
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Status;
