import React, { useState } from "react";
import { CommunityImageIcon, RightArrow } from "../../Assets";

function Community() {
  return (
    <>
      <div className="community_Main">
        <span
          style={{
            marginTop: 15,
            marginLeft: 25,
            fontWeight: 700,
            fontSize: 22,
          }}
        >
          Communities
        </span>
        <div className="Communities">
          <span>
            <CommunityImageIcon />
          </span>
          <h2 style={{ marginTop: 25 }}>Stay connected with a community</h2>
          <p
            style={{
              marginTop: 10,
              width: "75%",
              fontSize: 14,
              textAlign: "center",
              color: "#54656f",
            }}
          >
            Communities bring members together in topic-based groups, and make
            it easy to get admin announcements. Any community you're added to
            will appear here.
          </p>
          <div style={{ marginTop: 10, display: "flex" }}>
            <a style={{ fontSize: 14, color: "#00A884" }}>
              See example communities
            </a>
            <span style={{ marginLeft: 5 }}>
              <RightArrow style={{color: '#00A884'}}/>
            </span>
          </div>
          <button className="store_btn" style={{ marginTop: 20 }}>
            Start your community
          </button>
        </div>
      </div>
    </>
  );
}

export default Community;
