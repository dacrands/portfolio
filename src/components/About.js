import React, { Component } from 'react';

import Logo from '../assets/images/favicon.png';


export default class Hello extends Component {

  componentDidMount() {
    console.time('img')
    console.log(this.refs.logo)
    this.refs.logo.onload = () => {
      console.log(this.refs.logo.classList.add("about__img--show"))
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <header className="header">
            <h1 className={"primary"}>About</h1>
            {/* <hr className="hr"/> */}
          </header>
          <main className="about">
            <h2>
              I love building websites.
                        </h2>
            <div className="content">
              <p>
                My primary front-end tools are React, Redux, and Sass. For the back-end, I have 
                experience working with NodeJS and MongoDB, though I have recently been spending a lot of
                time with Flask and SQL (i.e., postgresql, SQLAlchemy). 
                            </p>
              <p>Along with web development, I love using Python to do cool things like webscraping,
                  visualizing data, and programming RaspberryPis.
                            </p>

              <p>You may view some of my work on my <a href="https://github.com/dacrands">github</a>.</p>
              <p>To learn more about what I do, explore this site, view my <a href="https://dacrands.github.io">blog</a> or <a href="mailto:davecrands@gmail.com">email me</a>.</p>
              <img ref="logo" className="img about__img" src={Logo} alt="logo" />
            </div>
          </main>
        </div>
      </div>
    );
  }
};