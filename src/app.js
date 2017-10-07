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
			options: props.options
		}

	}

	// FUNCTIONS AS PROPS
	handleClearAll() { this.setState(() => ({ options: [] })) }

	handleAddOption(newlyTypedOption) {
		if (!newlyTypedOption) {
			return 'Please enter a valid option';
		} else if (this.state.options
			.map(op => op.toLowerCase())
			.indexOf(newlyTypedOption.toLowerCase()) > -1) {
			return 'The option you\'ve entered is already on the list!'
		}

		if (newlyTypedOption) {
			this.setState((prevState) => ({ options: [...prevState.options, newlyTypedOption] }))
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
		return (
			<div>
				<Header title={'Chores Roulette'} subtitle={'We\'ll choose your next chore for you!'} />
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

Main.defaultProps = {
	options: ['Chore 1', 'Chore 2', 'Chore 3']
}

ReactDOM.render(<Main />, document.getElementById('app'))

// export default main;


