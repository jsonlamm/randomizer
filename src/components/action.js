import React, { Component } from 'react';

class Action extends Component {

	// handleOnChooser() {
	// 	// SETUP
	// 	const options = this.props.options
	// 	console.log('this.props FROM OPTIONS : ', this.props)
	// 	// const randomNum = Math.floor(Math.random() * 10)
	// 	const randomOptNum = Math.floor(Math.random() * options.length)
	// 	const randomOpt = options[randomOptNum]
	// 	alert(randomOpt)
	// }



	render() {
		let props = this.props;

		return (
			<div>
				<button
					disabled={props.hasOptions}
					onClick={props.handleChooser}
				>Choose for me!
				</button>
			</div>
		);
	}
}

export default Action;
