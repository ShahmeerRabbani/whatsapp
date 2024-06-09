import React, { useState } from 'react';
import ChatPage from './Chat/Chat_page';
import AccountPage from './Account/Account';
import PrivacyPage from './Privacy/Privacy';
import NotificationPage from './Notification/Notification';
import KeyboardPage from './Keyboard/Keyboard';
import HelpPage from './Help/Help';

function Settings() {

  const [isStyle, setIsStyle] = useState({});
  const [secondStyle, setSecondStyle] = useState({});
  const [showSecondComponent, setShowSecondComponent] = useState('');

  const handleShowComponent = (navigateName) => {
    setIsStyle({transform: 'translateX(-100%)', transition: 'transform 0.3s ease'})
    setSecondStyle({transform: 'translateX(0%)', transition: 'transform 0.3s ease',})
    setShowSecondComponent(navigateName)
    }
    
    const handleBackButton = () => {
      setIsStyle({transform: 'translateX(0%)', transition: 'transform 0.3s ease'})
      setSecondStyle({transform: 'translateX(100%)', transition: 'transform 0.3s ease'})
      // setShowSecondComponent('')
  }
  
  const SettingsEventData = [
    {
      id: 1,
      name: 'Account',
      icon: '',
      EventClick: () => handleShowComponent("Account"),
    },
    {
      id: 2,
      name: 'Privacy',
      icon: '',
      EventClick: () => handleShowComponent("Privacy"),
    },
    {
      id: 3,
      name: 'Chats',
      icon: '',
      EventClick: () => handleShowComponent("Chats"),
    },
    {
      id: 4,
      name: 'Notification',
      icon: '',
      EventClick: () => handleShowComponent("Notification"),
      },
      {
        id: 5,
        name: 'Keyboard shortcut',
        icon: '',
        EventClick: () => handleShowComponent("Keyboard"),
        },
        {
          id: 6,
          name: 'Help',
          icon: '',
          EventClick: () => handleShowComponent("Help"),
    },
    {
      id: 7,
      name: 'Log out',
      style: {
        color: '#EA0038',
      },
      icon: '',
    },

  ]
    return ( 
        <>
        <div className='Main_Settings_page'>
             <div className='Settings_container' style={isStyle}>
             <div className='Main_settings_header'>
                   <div className='Settings_title'>
                       <span style={{fontSize: 22, fontWeight: 700, marginLeft: 25 }}>Settings</span>
                   </div>
                   <div className='Settings_SearchInput'>
                   <div className="Settings_search">
                 <div className="Search_Icon">
                    
                     <svg
                       viewBox="0 0 24 24"
                       height="24"
                       width="24"
                       preserveAspectRatio="xMidYMid meet"
                       className=""
                       version="1.1"
                       x="0px"
                       y="0px"
                       enableBackground="new 0 0 24 24"
                     >
                       <title>search</title>
                       <path
                         fill="currentColor"
                         d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"
                       ></path>
                     </svg>
                    
                 </div>
                 <input
                   className="Settings_input"
                   type="text"
                   placeholder="Search settings"
                 />
               </div>
                   </div>
               </div>
               <div className='Settings_Option'>
                     <div className='Settings_firstLine'>
                       <div className='Settings_FirstLine_profile'>
                         <div className='Settings_Dp'>
                         </div>
                       </div>
                       <div className='Settings_FirstLine_About'>
                       <span>🖤</span>
                           <span style={{width: '85%', height: '20px', overflow: 'hidden', whiteSpace: 'nowrap',  textOverflow: 'ellipsis', fontSize: 14, color: '#54656f'}}>Don't StuDy məH...😌❤ Yəw w0n't graduatə...❤🔥</span>
                       </div>
                     </div>
   
   
                       {SettingsEventData.map((item, id) => {
                         return (
                           <div key={id}>
                             <div className='Settings_SecondLine'  onClick={item.EventClick}>
                         <div className='Settings_SecondLine_icon'>
                           <div style={{height: '30px', width: '30px', backgroundColor: 'red', borderRadius: '50%'}}>
                             {item.icon}
                           </div>
                         </div>
                         <div className='Settings_SecondLine_event' style={item.style}>
                           {item.name}
                         </div>
                       </div>
                           </div>
                         )
                       })}
                   </div>
                   </div>

                   <div className='Second_Setting_Page' style={secondStyle}>
            {showSecondComponent === 'Account' && <AccountPage handleBackButton={handleBackButton}/>}
            {showSecondComponent === 'Privacy' && <PrivacyPage handleBackButton={handleBackButton}/>}
            {showSecondComponent === 'Chats' && <ChatPage handleBackButton={handleBackButton}/>}
            {showSecondComponent === 'Notification' && <NotificationPage handleBackButton={handleBackButton}/>}
            {showSecondComponent === 'Keyboard' && <KeyboardPage handleBackButton={handleBackButton}/>}
            {showSecondComponent === 'Help' && <HelpPage handleBackButton={handleBackButton}/>}
             </div>

        </div>
        </>
     );
}

export default Settings;