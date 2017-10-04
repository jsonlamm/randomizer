import React, { Component } from 'react';

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
		return (
			<div>
				<form onSubmit={this.handleOptionChecker}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
				{this.state.error && <p key={this.state.error} > {this.state.error}</p>}
			</div>
		);
	}
}

export default AddOption;
