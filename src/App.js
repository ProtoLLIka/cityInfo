import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllCities from './components/allCities/allCities';
import Page404 from './components/general/pageNotFound';
import MainPage from './components/mainPage/mainPage';

function App() {
  // eslint-disable-next-line no-undef
  document.body.style.margin = '0px';
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/main" component={MainPage} />
          <Route path="/all" component={AllCities} />
          <Route path="*" component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
