import React from 'react';

function ChatSettings({isOpen}) {

    const boxSetting = [
        {
            id: 1,
            name: 'Contact info',
        },
        {
            id: 2,
            name: 'Selected messages',
        },
        {
            id: 3,
            name: 'Close chat',
        },
        {
            id: 4,
            name: 'Mute notification',
        },
        {
            id: 5,
            name: 'Disappearing messages',
        },
        {
            id: 6,
            name: 'Clear chat',
        },
        {
            id: 7,
            name: 'Delete chat',
        },
        {
            id: 8,
            name: 'Report',
        },
        {
            id: 9,
            name: 'Block',
        },
    ]
    
    return ( 
        <>
        <div className='Chat_settings' style={{transform: isOpen ? 'scale(1)' : 'scale(0)', opacity: isOpen ? '1' : '0'}}>
            {boxSetting.map((item, id) => {
                    return (
                        <div key={id}>
                        <div className='chatSetting_box'>
                            <span>{item.name}</span>
                        </div>
                    </div>
                    )
                })
            }
            </div>
        </>
     );
}

export default ChatSettings;