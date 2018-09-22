import React, { Component } from 'react';

import Logo from '../assets/images/favicon.png';


export default class Hello extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <header className="header">
            <h1 className={"primary"}>About</h1>
            {/* <hr className="hr"/> */}
          </header>
          <main className="about">
            <h3>
              I really enjoy building fast, responsive, and intuitive websites.
                        </h3>
            <div className="content">
              <p>
                Although most of my current work involves the front-end, I am also familiar with
                MongoDB, Express, bcrypt, body-parser, and other back-end technologies.
                            </p>
              <p>Along with web development, I love using Python to do cool things like webscraping,
                  visualizing data, and programming RaspberryPis.
                            </p>

              <p>You may view some of my work on my <a href="https://github.com/dacrands">github</a>.</p>
              <p>To learn more about what I do, feel free to view my <a href="https://dacrands.github.io">blog</a> or <a href="mailto:davecrands@gmail.com">email me</a>.                            </p>
              <img className="img about__img" src={Logo} alt="" />
            </div>
          </main>
        </div>
      </div>
    );
  }
};