import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import AllCities from './components/allCities';
import Page404 from './pages/pageNotFound';
import MainPage from './components/MainPage/MainPage';
import history from './utils/history';
import CityPage from './components/aboutCity/cityPage';

function App() {
  // eslint-disable-next-line no-undef
  document.body.style.margin = '0px'; ///normalize CSS

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
