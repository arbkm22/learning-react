import React, { useState } from "react";

function Thing() {

    const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"]);

    function addItem() {
        setThingsArray(prev => {
            return [...thingsArray, `Thing ${thingsArray.length + 1}`];
        })
    }

    const thingsElement = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div className="thing">
            <div className="addItemButton">
                <h1 className="itemAddButton" onClick={addItem}>Add Item</h1>
            </div>
            <h1>{thingsElement}</h1>
        </div>
    )
}

export default Thing;