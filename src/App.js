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
  constructor(props) {
  super(props);
  this.state = {
    // catList: [
    //   'Oakley',
    //   'Milla',
    //   'Whisper',
    //   'Neo',
    // ]
    catToys:{
      'Oakley': [
        'string',
        'bookmarks',
        'ice',
      ],
      'Milla': [
        'drool'
      ],
      'Whisper': [
        'string'
      ],
      'Neo': [
        'the couch'
      ]

      
    }

    
  };
};
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/cats" render={(props) => {
            return <Cats catList={Object.keys(this.state.catToys)} {...props}/>
          }}/>
          {/* will pull the cat's name from OneCat file */}
          <Route path="/cats/:catName" render={(props) => {
            return <OneCat toys={this.state.catToys} {...props}/>
          }} />
        </div>
      </Router>
    );
  }
}

export default App;
