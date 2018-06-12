import React from 'react';

export default class about extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			<h1>About Us</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa aperiam, animi sed quos cupiditate, omnis adipisci labore, architecto nisi iste suscipit nemo ab temporibus ipsam sequi eos! Assumenda voluptates debitis eum, saepe, temporibus, hic, nihil vero dolorum quos dolorem voluptatum.</p>
			</div>
		);
	}
}
