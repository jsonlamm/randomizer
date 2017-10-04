import React, { Component } from 'react';

const Action = (props) => {
	return (
		<div>
			<button
				disabled={props.hasOptions}
				onClick={props.handleChooser}
			>Choose for me!
			</button>
		</div>
	)
}

export default Action;
