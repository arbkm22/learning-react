import React, { useState } from 'react';
import './App.css';
import Main from './components/Main.js';
import Navbar from './components/Navbar.js';

function App() {

    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(prev => {
            return !prev;
        });
        console.log('darkMode: ', darkMode);
    }

    return (
        <div className="container">
            <Navbar mode={darkMode} handleClick={() => toggleDarkMode()} />
            <Main mode={darkMode} />            
        </div>
    )
}

export default App;