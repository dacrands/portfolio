import React, { Component } from 'react';
import video from '../assets/video/bergen.mp4';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <header className="header">
                        <h1>Projects</h1>   
                    </header>
                    <section className="projects">
                        <video className="video" autoPlay>
                            <source src={video}/>
                        </video>
                    </section>
                </div>                
            </div>
        )
    }
}