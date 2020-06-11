import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Link,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';
import AddOwner from '../AddOwner/AddOwner';
import AddPet from '../AddPet/AddPet';

import './App.css';

class App extends Component {

  render() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Pet Hotel</h1>
        </header>
        <div className="navbar">
          <Link to="/pet">
            <button className="leftButton">Pets</button>
          </Link>
          <Link to="/owner"><button className="rightButton">Owner</button></Link>
        </div>
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
