import React from 'react';
import { updateComputer, whatsAppComputer } from '../../Assets/images';
import { FaLock } from 'react-icons/fa6';

function FirstDisplay() {

    const FirstText = {
        fontSize: "32px",
        color: "#41525D",
        fontWeight: "300",
        marginBottom: "1%",
      };
      const SecondText = {
        fontSize: "14px",
        color: "#667781",
        fontWeight: "400",
        marginBottom: "3%",
        width: "60%",
        textAlign: "center",
      };
      const ThirdText = {
        fontSize: "14px",
        color: "#8696A0",
        fontWeight: "400",
        marginTop: "8%",
        marginBottom: "-7%",
      };
    return ( 
        <>
         <div className="front_display">
            <div className="computerImage">
              <img
                src={updateComputer}
                style={{
                  height: "auto",
                  width: "-webkit-fill-available",
                  objectFit: "contain",
                }}
              />
            </div>
            <p style={FirstText}>Download WhatsApp for Windows</p>
            <p style={SecondText}>
              Make calls, share your screen and get a faster experience when you
              download the Windows app.
            </p>
            <p>
              <button className="store_btn">Get from Microsoft Store</button>
            </p>

            <p style={ThirdText}>
              <FaLock size={10} /> Your personal messages are end-to-end
              encrypted
            </p>
          </div>
        </>
     );
}

export default FirstDisplay;