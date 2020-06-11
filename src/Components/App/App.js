import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';

//import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Pet Hotel</h1>
        </header>
        <Switch>
          <Redirect exact from="/" to="/pet" />
          <Route
              exact
              path="/pet"
              component={AddPet}
            />
            <Route
              exact
              path="/owner"
              component={AddOwner}
            />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default connect()(App);
