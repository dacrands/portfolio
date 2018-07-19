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
                        <article className="project">
                        
                            {/* <div className="project__content"> */}
                            
                                <div className="project__text content">
                                    <h2 className="strong">Bergen STEM</h2>

                                    <p>
                                        Single page React app created for the STEM Department at
                                        Bergen Community College.
                                    </p>   
                                    <a href="#">Github Repo</a>                       
                                </div>                                
                                
                            {/* </div> */}
                            <div className="project__video">
                            <video className="video" autoPlay>
                                <source src={video}/>
                            </video>
                            </div>
                            <div className="project__list">
                                <p className="strong">Features:</p>
                                <ul>
                                    <li>responsive web design (no CSS libraries)</li>
                                    <li>asset lazy loading</li>
                                    <li>async fetch requests</li>
                                    {/* <li>React Router</li> */}
                                </ul>
                            </div> 
                            <div className="project__list">
                                <p className="strong"> Tech used:</p>
                                <ul>
                                    <li>Express</li>
                                    <li>React Router 4</li>
                                    <li>Webpack 4</li>                                    
                                    <li>React Router</li>
                                </ul>
                            </div> 
                            
                        </article>                        
                        <article className="project">
                        
                            {/* <div className="project__content"> */}
                            
                                <div className="project__text content">
                                    <h2 className="strong">Bergen STEM</h2>

                                    <p>
                                        Single page React app created for the STEM Department at
                                        Bergen Community College.
                                    </p>   
                                                            
                                </div>                                
                                
                            {/* </div> */}
                            <div className="project__video">
                            <video className="video" autoPlay>
                                <source src={video}/>
                            </video>
                            </div>
                            <div className="project__list">
                                <p className="strong">Features:</p>
                                <ul>
                                    <li>responsive web design (no CSS libraries)</li>
                                    <li>asset lazy loading</li>
                                    <li>async fetch requests</li>
                                    {/* <li>React Router</li> */}
                                </ul>
                            </div> 
                            <div className="project__list">
                                <p className="strong"> Tech used:</p>
                                <ul>
                                    <li>Express</li>
                                    <li>React Router 4</li>
                                    <li>Webpack 4</li>                                    
                                    <li>React Router</li>
                                </ul>
                            </div> 
                            
                        </article>                        
                        <article className="project">
                        
                            {/* <div className="project__content"> */}
                            
                                <div className="project__text content">
                                    <h2 className="strong">Bergen STEM</h2>

                                    <p>
                                        Single page React app created for the STEM Department at
                                        Bergen Community College.
                                    </p>   
                                                            
                                </div>                                
                                
                            {/* </div> */}
                            <div className="project__video">
                            <video className="video" autoPlay>
                                <source src={video}/>
                            </video>
                            </div>
                            <div className="project__list">
                                <p className="strong">Features:</p>
                                <ul>
                                    <li>responsive web design (no CSS libraries)</li>
                                    <li>asset lazy loading</li>
                                    <li>async fetch requests</li>
                                    {/* <li>React Router</li> */}
                                </ul>
                            </div> 
                            <div className="project__list">
                                <p className="strong"> Tech used:</p>
                                <ul>
                                    <li>Express</li>
                                    <li>React Router 4</li>
                                    <li>Webpack 4</li>                                    
                                    <li>React Router</li>
                                </ul>
                            </div> 
                            
                        </article>                        
                    </section>
                </div>                
            </div>
        )
    }
}