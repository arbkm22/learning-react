import React, { useState } from 'react';

function Header(props) {

    return (
        <header className='header'>
            <p className='header-text'>Current User: {props.firstName}</p>
        </header>
    )
}

export default Header;