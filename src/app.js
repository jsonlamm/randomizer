import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.js'
import Action from './components/action.js'
import Options from './components/options.js'
import AddOption from './components/addOption.js'
import ClearAll from './components/clearAll.js'


class Main extends Component {
	constructor(props) {
		super(props)

		// BINDING
		this.handleClearAll = this.handleClearAll.bind(this);
		this.handleChooser = this.handleChooser.bind(this);
		this.optionsLength = this.optionsLength.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		// STATE
		this.state = {
			options: ['iou', 'moo']
		}

	}

	// FUNCTIONS AS PROPS
	handleClearAll() {
		this.setState(() => {
			return {
				options: []
			}
		})
	}

	handleAddOption(newlyTypedOption) {

		if (!newlyTypedOption) {
			newlyTypedOption = 'Please enter a valid option';

		} else if (this.state.options.indexOf(newlyTypedOption) > -1) {
			newlyTypedOption = 'The option you\'ve entered is already on the list!'
		}


		if (newlyTypedOption) {
			this.setState((prev, curr) => {
				let prevOptions = prev.options
				return {
					options: [...prev.options, newlyTypedOption]
				}
			})

		}
	}

	handleChooser() {
		// SETUP

		const randomOptNum = Math.floor(Math.random() * this.optionsLength())
		const randomOpt = this.state.options[randomOptNum]
		alert(randomOpt)
	}

	optionsLength() {
		return this.state.options.length
	}


	// hasOptions is V1 and hasNoOptions is V2, but probably should stick with one version
	render() {
		console.log('this.optionsLength : ', this.optionsLength)
		console.log('this.optionsLength() : ', this.optionsLength())
		return (
			<div>
				<Header />
				<Action
					hasOptions={this.optionsLength() < 1}
					options={this.state.options}
					handleChooser={this.handleChooser}
				/>
				<Options
					options={this.state.options} />



				<AddOption
					options={this.state.options}
					handleAddOption={this.handleAddOption}
				/>
				<ClearAll
					hasNoOptions={this.state.options.length < 1}
					optionsLength={this.state.options.length}
					handleClearAll={this.handleClearAll}
				/>
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('app'))

// export default main;


