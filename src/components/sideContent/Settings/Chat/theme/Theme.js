import React from 'react';

function Theme({handleNewBack}) {
    return (  
        <>
        <button onClick={handleNewBack}>Back</button>
        <h1>Theme</h1>
        </>
    );
}

export default Theme;