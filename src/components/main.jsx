import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { increment } from '../actions';

// Styles
import '../../public/styles/index.scss';

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const style = {
			width: '100px',
			marginLeft: 'auto',
			marginRight: 'auto',
			textAlign: 'center'
		};

		return (
			<div className="app-container">
				<h1 className="app-container-title">REACT STARTER KIT!</h1>
				<img className="app-container-image" src="/public/images/minime.png" alt="minime" />
				<div style={style}>{ this.props.counter.count }</div>
				{ this.props.children }
				<button
					className="btn btn-default"
					style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
					onClick={this.props.increment}
				>
					Increment Me!
				</button>
			</div>
			);
	}

}

const mapStateToProps = (state) => {
	return {
		counter: state.counter
	};
}

export default connect(mapStateToProps, { increment })(Main);
