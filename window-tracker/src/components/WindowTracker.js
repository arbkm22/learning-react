import React, { useEffect, useState } from 'react'

function WindowTracker() {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        function watchWindow() {
            console.log('watchWindowCalled');
            setInnerWidth(window.innerWidth);
        }
        window.addEventListener("resize", watchWindow);

        return function() {
            console.log('removing eventListener');
            window.removeEventListener("resize", watchWindow);
        }
    }, []);

    return (      
        <div>
            <h2>Window Width: {innerWidth}</h2>
        </div>
    )
}

export default WindowTracker