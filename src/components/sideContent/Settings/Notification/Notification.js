import React from 'react';

function NotificationPage({handleBackButton}) {
    return ( 
        <>
        <button onClick={handleBackButton}>back</button>
        <h1>Notification</h1>
        </>
     );
}

export default NotificationPage;