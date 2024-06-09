import React, { useState } from "react";
import CommunityImage from "./communityImage";

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
            <CommunityImage />
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
              <svg
                viewBox="0 0 10 21"
                height="21"
                width="10"
                preserveAspectRatio="xMidYMid meet"
                style={{ color: "#00A884" }}
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
          <button className="store_btn" style={{ marginTop: 20 }}>
            Start your community
          </button>
        </div>
      </div>
    </>
  );
}

export default Community;
