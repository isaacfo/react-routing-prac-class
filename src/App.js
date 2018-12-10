import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Cats from './Cats';
import NavBr from './NavBar';

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
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cats">Cats</Link></li>
          {/* <Home />
          <About />
          <Cats /> */}
        </ul>
        <NavBar/>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/cats" component={Cats}/>

        </div>
      </Router>
    );
  }
}

export default App;
