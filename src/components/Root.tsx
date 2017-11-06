import  * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

// Create material-ui theme
const theme = createMuiTheme();

// Components
import Main from './Main';

interface IRootProps {
  store: any
};

interface IRootState {};

export default class Root extends React.Component<IRootProps, IRootState> {
  render() {
    const { store } = this.props;

    return (
      <Provider store={ store }>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Route path="/" component={Main} />
          </Router>
        </MuiThemeProvider>
      </Provider>
    )
  }
}
