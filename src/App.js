import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import AllCities from 'pages/AllCities/index';
import Page404 from 'pages/NotFound/index';
import MainPage from 'pages/Main/index';
import CityPage from 'pages/AboutCity/index';
import store from 'store/index';

const App = () => (
  <>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/about" component={CityPage} />
          <Route path="/all" component={AllCities} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </Provider>
  </>
);

export default App;
