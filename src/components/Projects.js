import React, { Component } from 'react';

import bergen from '../assets/video/bergen.mp4';
import nyt from '../assets/video/nyt.mp4';

export default class Projects extends Component {

    componentDidMount() {
        // document.body.style.background = "#1f74d4";
    }

    componentWillUnmount() {
        document.body.style.background = null;
    }

    com

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
                            
                                <div className="project__text">
                                    <div>
                                    <h2>Bergen STEM</h2>
                                    <div className="project__text-p content"> 
                                    <p>
                                        Single page React app created for the STEM Department at
                                        Bergen Community College.
                                    </p>   
                                    </div>
                                    </div>
                                    
                                    <div className="links">
                                        <a href="#">Github Repo</a>                       
                                        <a href="https://www.bergenstem.com" target="_blank">Bergen STEM</a>                       
                                    </div>
                                    
                            </div>                                
                                
                            {/* </div> */}
                            <div className="project__video">
                                <video className="video" autoPlay loop playsInline>
                                    <source src={bergen} type="video/mp4" />
                                </video>
                            </div>
                            <div className="project__features">
                                <div className="project__list">
                                    <p className="">Features:</p>
                                    <ul>
                                        <li>responsive web design (no CSS libraries)</li>
                                        <li>asset lazy loading</li>
                                        <li>async fetch requests</li>
                                        {/* <li>React Router</li> */}
                                    </ul>
                                </div> 
                                <div className="project__list">
                                    <p className=""> Tech used:</p>
                                    <ul>
                                        <li>Express</li>
                                        <li>React Router 4</li>
                                        <li>Webpack 4</li>                                    
                                        <li>React Router</li>
                                    </ul>
                                </div> 
                            </div>                                                        
                        </article>                        
                        <article className="project">
                        
                            {/* <div className="project__content"> */}
                            
                                <div className="project__text">
                                    <div>
                                        <h2 className="strong">New York Times App</h2>
                                        <div className="project__text-p content"> 
                                            <p>
                                                The NYT API allows you to access their archives, which contains
                                                articles dating back to the 19<sup>th</sup> century.                                         
                                            </p>                                                     
                                            <p>
                                                Set a custom year range between the years 1900 and 2018
                                                and hundreds of article abstracts from a random month.
                                            </p>          
                                        </div>
                                    </div>
                                    
                                    <div className="links">
                                        <a href="#">Github Repo</a>                       
                                        <a href="https://www.bergenstem.com" target="_blank">Bergen STEM</a>                       
                                    </div>
                                    
                                </div>                                
                                
                            {/* </div> */}
                            <div className="project__video">
                            <video className="video" autoPlay loop playsInline>
                                <source src={nyt}/>
                            </video>
                            </div>
                            <div className="project__features">
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
                                        <li>Redux</li>
                                        <li>React Router 4</li>
                                        <li>Webpack 4</li>                                    
                                        <li>Sass</li>
                                    </ul>
                                </div> 
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
                                <source src={nyt}/>
                            </video>
                            </div>
                            <div className="project__features">
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
                            </div>
                            
                            
                        </article>                        
                    </section>
                </div>                
            </div>
        )
    }
}