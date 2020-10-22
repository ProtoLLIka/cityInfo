import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllCities from './allCities/allCities';
import Page404 from './general/pageNotFound';
import MainPage from './mainPage/mainPage';

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
