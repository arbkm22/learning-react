import React, { useState } from 'react';

function Jokes(props) {

    const [isShown, setIsShown] = useState(false);

    function toggle() {
        setIsShown(prev => !prev);
    }

    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {isShown && <p>Punchline: {props.punchline}</p>}
            <button onClick={toggle}>{isShown ? 'Hide' : 'Show'} Punchline</button>
            <hr />
        </div>
    )
}

export default Jokes;