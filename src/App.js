import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import './App.css';
import Homepage from './Homepage';

class App extends React.Component {
  render() {
      return (
          <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Homepage} />
              </Switch>
          </BrowserRouter>
      )
  }
}

export default App;
