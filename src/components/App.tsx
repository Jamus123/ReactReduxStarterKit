declare var module: any;
declare var require: any;
declare module "react-hot-loader";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import configureStore from './Store';

let store = configureStore({});

ReactDOM.render(
  <AppContainer>
		<Root store={ store } />
	</AppContainer>
	, document.querySelector('.render-target')
);

if (module.hot) {
	module.hot.accept('./Root', () => {
		const NewRoot = require('./Root').default;
		ReactDOM.render(
			<AppContainer>
				<NewRoot store={ store } />
			</AppContainer>
			, document.querySelector('.render-target')
		);
	});
}
