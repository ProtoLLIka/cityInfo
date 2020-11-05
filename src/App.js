import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import AllCities from 'pages/AllCities/index';
import Page404 from 'pages/NotFound/index';
import MainPage from 'pages/Main/index';
import CityPage from 'pages/AboutCity/index';
import store from 'store/index';

import styles from './App.css';

const App = () => (
  <div className={styles.appContainer}>
    <Provider store={store}>
      <Router basename="/cityInfo">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/about" component={CityPage} />
          <Route path="/all" component={AllCities} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </Provider>
  </div>
);

export default App;
