import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../assets/styles/main.scss';

var activeStyle = { borderBottom: `1px dashed #38393a` }

class Menu extends Component {
    render() {
        return (
            <nav className="nav">
                <ul>
                    <li><NavLink  exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                    <li><NavLink  to="/about" activeStyle={activeStyle}>About</NavLink></li>
                    <li><NavLink  to="/projects" activeStyle={activeStyle}>Projects</NavLink></li>
                    <li><NavLink  to="/contact" activeStyle={activeStyle}>Contact</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Menu;