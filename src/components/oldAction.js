import React, { Component } from 'react';

import { thing } from './options'

class Action extends Component {
	render() {
		const props = this.props;
		const onChooser = () => {
			// const randomNum = Math.floor(Math.random() * 10)
			const randomOptNum = Math.floor(Math.random() * props.options.length)
			const randomOpt = props.options[randomOptNum]
			alert(randomOpt)
		}

		return (
			<div>
				<button onClick={onChooser}>Choose for me!</button>
			</div>
		);
	}
}

export default Action;