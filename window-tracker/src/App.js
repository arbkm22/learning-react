import React, {useState} from "react"
import './App.css';
import WindowTracker from './components/WindowTracker.js';

function App() {

    const [show, setShow] = useState(false);

    function handleClick() {
        setShow(prevShow => {
            return !prevShow
        })
    }

  return (
    <div className="App">
      <button onClick={handleClick}>Toggle Window Tracker</button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
