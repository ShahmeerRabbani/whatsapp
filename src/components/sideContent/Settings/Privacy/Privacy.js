import React from 'react';

function PrivacyPage({handleBackButton}) {
    return ( 
        <>
        <button onClick={handleBackButton}>back</button>
        <h1>Privacy</h1>
        </>
     );
}

export default PrivacyPage;