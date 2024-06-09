import React, { useState } from 'react';

function AccountPage({handleBackButton}) {
   
    return ( 
        <>
        <div className='Account_Page'>
            <button onClick={handleBackButton}>Back</button>
        <h1>Account</h1>
        </div>
        </>
     );
}

export default AccountPage;