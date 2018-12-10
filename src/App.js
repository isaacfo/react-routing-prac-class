import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Cats from './Cats';
import NavBar from './NavBar';
import OneCat from './OneCat'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/cats" component={Cats}/>
          {/* will pull the cat's name from OneCat file */}
          <Route path="/cats/:catName" component={OneCat}/>
        </div>
      </Router>
    );
  }
}

export default App;
