import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import AllCities from 'pages/AllCities/index';
import Page404 from 'pages/NotFound/index';
import MainPage from 'pages/Main/index';
import CityPage from 'pages/AboutCity/index';
import store from 'store/index';
import history from 'utils/history';

const App = () => (
  <>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/main" component={MainPage} />
          <Route path="/about" component={CityPage} />
          <Route path="/all" component={AllCities} />
          <Route path="*" component={Page404} />
        </Switch>
      </Router>
    </Provider>
  </>
);

export default App;
