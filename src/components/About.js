import React, { Component } from 'react';

export default class Hello extends Component {

    constructor() {
        super();

        this.state = {
            skills: ['React', 'Redux', 'Express', 'Sass', 'Webpack']
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
                        <div className="three">
                            <p></p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ipsum molestiae optio delectus nemo autem nisi dicta, odit eius ea!</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ipsum molestiae optio delectus nemo autem nisi dicta, odit eius ea!</p>
                        </div>

                        
                        <p>Most of my projects use the following tech:                            
                        </p>
                        <ul>
                            {
                                this.state.skills.map(skill => {
                                    return (
                                        <li>{skill}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>                
                </div>            
            </div>
        );
    }
};