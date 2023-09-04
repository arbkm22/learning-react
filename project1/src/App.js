import React, { useState } from 'react';
import './App.css';
import Main from './components/Main.js';
import Navbar from './components/Navbar.js';

function App() {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="container">
            <Navbar mode={darkMode} />
            <Main mode={darkMode} />            
        </div>
    )
}

export default App;