import React, { Component } from 'react';

const ClearAll = (props) => {
	return (
		<div>
			<button
				disabled={props.hasNoOptions}
				onClick={props.handleClearAll}
			>Clear All
			</button>
		</div>
	)
}

export default ClearAll;
