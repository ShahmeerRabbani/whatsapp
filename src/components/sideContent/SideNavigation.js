import React, { useState } from 'react';
import SideSettings from './sideSettings/SideSettings';
import SideDisplayChat from './sideDisplayChat/SideDisplayChat';

function SideContent({handleDisplay, onMessageClick}) {
    const [selectComponent, setSelectComponent] = useState('Chat');

    const handleButtonClick = (componentName) => {
        setSelectComponent(componentName)
    };

    return ( 
        <>
        <div className="side_content">
            <SideSettings handleButtonClick = {handleButtonClick}/>
            <SideDisplayChat selectComponent = {selectComponent} handleDisplay = {handleDisplay} onMessageClick={onMessageClick}/>
        </div>
        </>
     );
}

export default SideContent;