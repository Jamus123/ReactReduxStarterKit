import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


// Components
import Main from './main';

const Root = (props) => {
	return (
		<Provider store={ props.store }>
			<Router>
				<Route path="/" component={Main} />
			</Router>
		</Provider>
	);
}

export default Root;
