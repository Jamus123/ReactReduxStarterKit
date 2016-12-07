import  * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';

interface IRootProps {
  store: any,
  history: any
};

interface IRootState {};

export default class Root extends React.Component<IRootProps, IRootState> {
  render() {
    const { store, history } = this.props;

    return (
      <Provider store={ store }>
        <Router history={ history } routes={ routes }/>
      </Provider>
    )
  }
}
