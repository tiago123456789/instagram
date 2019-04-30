import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Router>
          <Header />
          <Timeline />
        </Router>

      </div>
    );
  }
}

export default App;
