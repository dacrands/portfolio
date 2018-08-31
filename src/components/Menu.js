import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../assets/styles/main.scss';

const activeStyle = { borderBottom: `1px dashed #1f74d4` }

class Menu extends Component {
    constructor() {
        super();
        this.showNav = this.showNav.bind(this);

        this.state = { showBurger : true }
    }

    showNav() {
        this.refs.nav.classList.toggle('nav__show');
        const tempBool = this.state.showBurger;
        this.setState({ showBurger: !tempBool });
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.refs.nav.classList.remove('nav__show')
            this.setState({ showBurger: true })
        });
    }

    



    render() {
        return (
            <div>
                <button onClick={this.showNav} className="nav__close">
                    <h1>
                    {   
                        this.state.showBurger
                        ? "\u2261"
                        : "\u2715"
                    }
                    </h1>
                </button>            
                <nav ref="nav" className="nav">                
                    <ul>
                        <li><NavLink onClick={this.showNav}  exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                        <li><NavLink onClick={this.showNav}  to="/about" activeStyle={activeStyle}>About</NavLink></li>
                        <li><NavLink onClick={this.showNav} to="/projects" activeStyle={activeStyle}>Projects</NavLink></li>                        
                        <li>
                            <span className="link__tip">This will open a new tab and take you out of this place!</span>
                            <a onClick={this.showNav} target="_blank" href="https://dacrands.github.io/">Blog</a>
                        </li>
                        <li><NavLink onClick={this.showNav} to="/contact" activeStyle={activeStyle}>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;