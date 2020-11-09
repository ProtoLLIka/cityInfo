import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import NavBar from 'components/General/NavBar';
import AllCities from 'pages/AllCities';
import Page404 from 'pages/NotFound';
import MainPage from 'pages/Main';
import CityPage from 'pages/AboutCity';
import store from 'store';

import styles from './App.css';

const App = () => (
  <div className={styles.appContainer}>
    <Provider store={store}>
      <Router basename="/cityInfo">
        <NavBar />
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
