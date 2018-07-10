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
                        <p class="lead">
                            I really enjoy building fast, responsive, and intuitive Node apps.
                        </p>

                        <p>Most of my projects use the following tech:                            
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
                        
                        <div className="three">
                            <p>Along with web development, I love using Python to do cool things like webscraping,
                                data visualization, and program RaspberryPis.
                            </p>
                            <p>

                            </p>
                            <p>
                                When I'm not programming, I work as a staff trainer for 
                                a non-profit that enables individuals with
                                developmental disabilities to reach their maximum potential. 
                                I conduct trainings on everything from how to input medical
                                information into an electronic health record system to, as a
                                certified Red Cross instructor, teaching the skills necessary to provide
                                care during a life-threatening emergency.
                            </p>
                        </div>

                        
                        
                    </div>                
                </div>            
            </div>
        );
    }
};