import React, { Component } from 'react';

// import { thing } from './options'

class AddOption extends Component {
	constructor(props) {
		super(props);
		this.handleOptionChecker = this.handleOptionChecker.bind(this);
		this.state = {
			error: undefined
		}
	}
	handleOptionChecker(evt) {
		evt.preventDefault();

		const newlyTypedOption = evt.target.elements.option.value.trim();

		const error = this.props.handleAddOption(newlyTypedOption)

		if (error) {
			this.setState(() => {
				return { error }
			})
		}
		evt.target.elements.option.value = ''
	}

	if (option) {
		this.props.handleAddOption(option)
	}
	// onFormSubmit(evt) {

	// 	evt.preventDefault();

	// 	const newlyTypedOption = evt.target.elements.option.value.trim();

	// 	if (newlyTypedOption) {
	// 	alert(`you typed ${newlyTypedOption} and submitted it an option`)
	// 	}
	// }
	render() {
		// let props = this.props
		// console.log('add option props : ', props)
		return (
			<div>
				<form onSubmit={this.handleOptionChecker}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
				
			</div>
		);
	}
}

export default AddOption;
