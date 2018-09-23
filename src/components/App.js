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
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';

import '../assets/styles/main.scss';

const App = () => (
  <Router>
    <div className="main">
      <div>
      <Menu />
      </div>
      
      <Route exact path="/" component={Hello} /> 
      <Route path="/about" component={About} /> 
      <Route path="/portfolio" component={Portfolio} /> 
      <Route path="/skills" component={Skills} /> 
      <Route path="/contact" component={Contact} /> 
    </div>
  </Router>
);

export default App;