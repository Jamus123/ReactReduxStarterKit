import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import DevTools from '../containers/dev-tools';

/**
 * This variable is "true" if the application
 * is running in production.
 */
const isProduction = process.env.NODE_ENV === 'production';

// Components
import Main from './main';

const Root = (props) => {
	return (
		<Provider store={ props.store }>
			<div>
				<Router>
					<Route path="/" component={Main} />
				</Router>
			{/**
       * Embed the DevTools component only
       * when in development.
       */}
      {!isProduction && <DevTools />}
			</div>
		</Provider>
	);
}

export default Root;
