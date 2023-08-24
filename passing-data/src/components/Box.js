import React, { useState } from "react";

function Box(props) {

	const styles = {
		backgroundColor: props.on ? "#222222" : "#e3e3e3"
	}

	return (
		<div 
            className="box" 
            style={styles} 
            onClick={props.handleClick}>
		</div>	
	);
}

export default Box;