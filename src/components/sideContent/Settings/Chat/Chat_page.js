import React from 'react';

function ChatPage({handleBackButton}) {
    return ( 
        <>
        <button onClick={handleBackButton}>Back</button>
        <h1>Chat</h1>
        </>
     );
}

export default ChatPage;