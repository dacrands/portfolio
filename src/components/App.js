import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Hello from './Hello';
import Menu from './Menu';
import About from './About';

import '../assets/styles/main.scss';

const App = () => (
  <Router>
    <div className="main">
      <div>
      <Menu />
      </div>
      
      <Route exact path="/" component={Hello} /> 
      <Route path="/about" component={About} /> 
    </div>
  </Router>
);

export default App;