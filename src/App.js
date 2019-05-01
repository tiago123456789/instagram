import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Timeline from "./components/Timeline";
import Login from "./components/Login";
import ProtectedRoute from './components/auth/ProtectedRoute'

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/timeline" component={Timeline} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    );
  }
}

export default App;
