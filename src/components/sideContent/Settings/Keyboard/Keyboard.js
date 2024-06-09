import React from 'react';

function KeyboardPage({handleBackButton}) {
    return ( 
        <>
        <button onClick={handleBackButton}>back</button>
        <h1>Keyboard</h1>
        </>
     );
}

export default KeyboardPage;