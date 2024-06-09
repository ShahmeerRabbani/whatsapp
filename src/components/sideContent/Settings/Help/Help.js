import React from 'react';

function HelpPage({handleBackButton}) {
    return ( 
        <>
        <button onClick={handleBackButton}>back</button>
        <h1>Help</h1>
        </>
     );
}

export default HelpPage;