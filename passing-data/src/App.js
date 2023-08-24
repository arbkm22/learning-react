import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import boxes from './components/boxes';
import Box from './components/Box';

function App(props) {

	const [squares, setSquares] = useState(boxes);

    function toggle(id) {
        setSquares(prevSquare => {
            return prevSquare.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square;
            });
        })
    }

	const squareElements = squares.map(square => {
		return (
			<Box 
                key={square.id} 
                on={square.on} 
                boxId={square.id}
                handleClick={() => toggle(square.id)}
            />
		)
	});
    
	return (
		<div>
			{squareElements}
		</div>
	)
}

export default App;
