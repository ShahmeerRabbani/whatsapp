import React from 'react';
import { LeftArrowIcon } from "../../../Assets";

function HelpPage({handleBackButton}) {
    return ( 
        <>
        <div className='Help_Page'>
        <div className="close_profile">
          <span className="close_button" onClick={handleBackButton}>
            <LeftArrowIcon />
          </span>
          <div>
            <span style={{ marginLeft: 30, color: "black" }}>
              Help
            </span>
          </div>
        </div>

        <div className='Animated_image'>
            <div className='Animation_div'></div>
            <span style={{marginTop: 30, color: '#54656f'}}>Version 2.3000.1014559120</span>
        </div>
        <div></div>

        </div>
        </>
     );
}

export default HelpPage;