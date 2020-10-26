import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import AllCities from './allCities/allCities';
import Page404 from './general/pageNotFound';
import MainPage from './mainPage/mainPage';
import history from './history';
import CityPage from './aboutCity/cityPage';
function App() {
  // eslint-disable-next-line no-undef
  document.body.style.margin = '0px';

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/main" component={MainPage} />
          <Route path="/about" component={CityPage} />
          <Route path="/all" component={AllCities} />
          <Route path="*" component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
