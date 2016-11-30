import * as React from 'react';
import { Link } from 'react-router';

// Styles
declare function require(name: string): any;
require('../../public/styles/index.scss');

interface mainProps {
	children: any
};

class Main extends React.Component<mainProps, {}> {
	render() {
		return (
			<div className="app-container">
				<h1 className="app-container-title">REACT STARTER KIT</h1>
				<img className="app-container-image" src="/public/images/minime.png" alt="minime" />
				{ this.props.children }
			</div>
		);
	}
}

export default Main;
