import React, { Component } from 'react';

class ClearAll extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<button
					disabled={this.props.hasNoOptions}
					onClick={this.props.handleClearAll}
				>Clear All</button>
			</div>
		);
	}
}

export default ClearAll;
