import * as React from 'react';

// Styles
declare function require(name: string): any;
require('../../public/styles/index.scss');

interface IMainProps {
	children: any
};

interface IMainState {
	count: number
};

class Main extends React.Component<IMainProps, IMainState> {

	state: IMainState = { count: 0 };

	render() {

		const style = {
			width: '100px',
			marginLeft: 'auto',
			marginRight: 'auto',
			textAlign: 'center'
		};

		return (
			<div className="app-container">
				<h1 className="app-container-title">REACT STARTER KIT!!</h1>
				<img className="app-container-image" src="/public/images/minime.png" alt="minime" />
				<div style={style}>{ this.state.count }</div>
				{ this.props.children }
				<button
					className="btn btn-default"
					style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
					onClick={() => { this.setState({ count: this.state.count + 1 }); }}
				>
					Increment Me!
				</button>
			</div>
		);
	}
}

export default Main;
