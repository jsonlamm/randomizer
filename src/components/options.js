import React from 'react';
import Option from './option';

const Options = (props) => {
	return (
		<div>
			<p>
				{
					props.options.length > 0 ?
						`There are ${props.options.length} options(s)` :
						'There are no options'
				}
			</p>
			<ol>
				{
					props.options
						.map(option => <Option key={option} option={option} />)
				}
			</ol>
		</div>
	);
};

export default Options;
