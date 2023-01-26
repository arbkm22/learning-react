import React from 'react';

function Jokes({setup, punchline}) {
    return (
        <div>
            {setup && <h3>Setup: {setup}</h3>}
            <p>Punchline: {punchline}</p>
            <hr />
        </div>
    )
}

export default Jokes;