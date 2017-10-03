import React, { Component } from 'react';

// import { thing } from './list'

// const thing = {
// 	title: 'Idunno app',
// 	subtitle: "if you can't decide...",
// 	// options: ['there\'s one', 'and here\'s two'],
// 	options: ['boogers']
// }


export class Option extends Component {
	render() {
		console.log('this.state : ', this.state)
		let props = this.props
		console.log('OPTION props : ', props)
		return (
			<div>
				{
					<li>
						{props.option}
					</li>
				}

				{/* <ol>
					{
						props.options.map((option) => <li key={option} >Option: {option} </li>)
					}
				</ol> */}
			</div>
		);
	}
}

class Options extends Component {
	render() {
		let props = this.props

		return (
			<div>
				<p>{
					props.options.length > 0 ?
						`There are ${props.options.length} options(s)` :
						'There are no options'
				}</p>
				<ol>
					{
						props.options.map((option) => <Option key={option} option={option} />)
					}
				</ol>
				{this.props.error && <p> {this.state.error}</p>}

			</div>
		);
	}
}

export default Options;
