import React, { Component } from 'react';

export default class Hello extends Component {

    constructor() {
        super();

        this.state = {
            skills: ['React', 'Redux', 'Express', 'Sass', 'Webpack', 'Git', 'MongoDB']
        }
    }

    render() {
        return(
            <div>
                <div className="container">
                    <div className="center about">
                        <h1>About</h1>
                        <hr className="hr"/>
                        <p class="strong">
                            I really enjoy building fast, responsive, and intuitive React apps.
                        </p>

                        <p>
                            I spend most of my time using the following tech:                   
                        </p>
                        <div className="lists">
                            <ul>
                                {
                                    this.state.skills.slice(0,4).map(skill => {
                                        return (
                                            <li>{skill}</li>
                                        )
                                    })
                                }
                            </ul>
                            <ul>
                                {
                                    this.state.skills.slice(4).map(skill => {
                                        return (
                                            <li>{skill}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        
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
                        </div>

                        
                        
                    </div>                
                </div>            
            </div>
        );
    }
};