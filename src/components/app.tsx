declare var module: any;
declare var require: any;
declare module "react-hot-loader";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import thunk from 'redux-thunk';
import Root from './root';

//import routes and reducers
import routes from './routes';
import reducer from '../ts/reducers';

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleWare(reducer);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <AppContainer>
		<Root store={ store } history={ history }/>
	</AppContainer>
	, document.querySelector('#content')
);

if (module.hot) {
	module.hot.accept('./root', () => {
		const NewRoot = require('./root').default;
		ReactDOM.render(
			<AppContainer>
				<NewRoot store={ store } history={ history }/>
			</AppContainer>
			, document.querySelector('#content')
		);
	});
}
