import React from "react";
import { LeftArrowIcon } from "../../../../Assets";
// import { BiCheck, BiCheckbox } from "react-icons/bi";
// import { RiCheckboxBlankLine, RiHeart2Fill } from "@remixicon/react";

function Wallpaper({
  handleNewBack,
  handleRemoveWallpaperPage,
  handleHoverColor,
  handleMouseLeave,
  handleMouseEnter,
  activeChild,
}) {
  const handleBackChatPage = () => {
    handleRemoveWallpaperPage();
    handleNewBack();
  };

  const colorTemplates = [
    {
      id: 1,
      bg_color: {
        backgroundColor: "#EFEAE2",
      },
      doodles: {
        opacity: '0.4'
      },
      title: "Default",
    },
    {
      id: 2,
      bg_color: {
        backgroundColor: "#BBE4E5",
      },
      doodles: {
        opacity: '0.42'
      },
    },
    {
      id: 3,
      bg_color: {
        backgroundColor: "#AED8C7",
      },
      doodles: {
        opacity: '0.3'
      },
    },
    {
      id: 4,
      bg_color: {
        backgroundColor: "#7ACBA5",
      },
      doodles: {
        opacity: '0.26'
      },
    },
    {
      id: 5,
      bg_color: {
        backgroundColor: "#CBDAEC",
      },
      doodles: {
        opacity: '0.42'
      },
    },
    {
      id: 6,
      bg_color: {
        backgroundColor: "#66D2D5",
      },
      doodles: {
        opacity: '0.26'
      },
    },
    {
      id: 7,
      bg_color: {
        backgroundColor: "#63BDCF",
      },
      doodles: {
        opacity: '0.26'
      },
    },
    {
      id: 8,
      bg_color: {
        backgroundColor: "#D6D0F0",
      },
      doodles: {
        opacity: '0.36'
      },
    },
    {
      id: 9,
      bg_color: {
        backgroundColor: "#CECECE",
      },
      doodles: {
        opacity: '0.36'
      },
    },
    {
      id: 10,
      bg_color: {
        backgroundColor: "#D1DABE",
      },
      doodles: {
        opacity: '0.42'
      },
    },
    {
      id: 11,
      bg_color: {
        backgroundColor: "#E6E1B1",
      },
      doodles: {
        opacity: '0.42'
      },
    },
    {
      id: 12,
      bg_color: {
        backgroundColor: "#FEEFA9",
      },
      doodles: {
        opacity: '0.06'
      },
    },
    {
      id: 13,
      bg_color: {
        backgroundColor: "#FED297",
      },
      doodles: {
        opacity: '0.42'
      },
    },
    {
      id: 14,
      bg_color: {
        backgroundColor: "#FD9A9B",
      },
      doodles: {
        opacity: '0.26'
      },
    },
    {
      id: 15,
      bg_color: {
        backgroundColor: "#FD6769",
      },doodles: {
        opacity: '0.26'
      },
    },
    {
      id: 16,
      bg_color: {
        backgroundColor: "#FB4668",
      },
      doodles: {
        opacity: '0.26'
      },
    },
    {
      id: 17,
      bg_color: {
        backgroundColor: "#922040",
      },
      doodles: {
        opacity: '0.17'
      },
    },
    {
      id: 18,
      bg_color: {
        backgroundColor: "#DC6E4F",
      },
      doodles: {
        opacity: '0.2'
      },
    },
    {
      id: 19,
      bg_color: {
        backgroundColor: "#644D52",
      },
      doodles: {
        opacity: '0.13'
      },
    },
    {
      id: 20,
      bg_color: {
        backgroundColor: "#517E7E",
      },
      doodles: {
        opacity: '0.13'
      },
    },
    {
      id: 21,
      bg_color: {
        backgroundColor: "#3190BB",
      },
      doodles: {
        opacity: '0.13'
      },
    },
    {
      id: 22,
      bg_color: {
        backgroundColor: "#35558A",
      },
      doodles: {
        opacity: '0.1'
      },
    },
    {
      id: 23,
      bg_color: {
        backgroundColor: "#55626F",
      },
      doodles: {
        opacity: '0.13'
      },
    },
    {
      id: 24,
      bg_color: {
        backgroundColor: "#1D2326",
      },
      doodles: {
        opacity: '0.1'
      },
    },
    {
      id: 25,
      bg_color: {
        backgroundColor: "#301E34",
      },
      doodles: {
        opacity: '0.1'
      },
    },
    {
      id: 26,
      bg_color: {
        backgroundColor: "#ECF0F1",
      },
      doodles: {
        opacity: '0.06'
      },
    },
    {
      id: 27,
      bg_color: {
        backgroundColor: "#FFFEA2",
      },
      doodles: {
        opacity: '0.06'
      },
    },
    {
      id: 28,
      bg_color: {
        backgroundColor: "#E7E8D2",
      },
      doodles: {
        opacity: '0.06'
      },
    },
  ];

  return (
    <>
      <div className="wallpaper_parent">
        <div className="close_profile">
          <span className="close_button" onClick={handleBackChatPage}>
            <LeftArrowIcon />
          </span>
          <div>
            <span style={{ marginLeft: 30, color: "black" }}>
              Set chat wallpaper
            </span>
          </div>
        </div>
        <div className="wallpaper">
          <div style={{ height: "20px", marginTop: "20%" }}>
            <input type="checkbox" /> <span>Add Whatsapp doodles</span>
          </div>
          <div className="Color_parent">
            {colorTemplates.map((item, id) => {
                const isActive = id === activeChild;
                const borderColor = isActive ? 'inset #009DE2 0px 0px 0px 4px' : 'none';

              return (
                <div key={id}>
                  <div
                    className="Color_child"
                    onMouseEnter={() =>
                      handleMouseEnter(item.bg_color.backgroundColor, item.doodles.opacity)
                    }
                    onMouseLeave={handleMouseLeave}
                    onClick={() =>
                      handleHoverColor(item.bg_color.backgroundColor, id, item.doodles.opacity)
                    }
                    style={{
                        ...item.bg_color,
                        boxShadow: borderColor,
                    }}
                  >
                    <span>{item.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Wallpaper;
