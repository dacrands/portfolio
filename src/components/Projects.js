import React, { Component } from 'react';

import bergen from '../assets/video/bergen.mp4';
import nyt from '../assets/video/nyt.mp4';
import blog from '../assets/video/blog.mp4';
import flaskmon from '../assets/video/flaskmon.mp4';

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
            <h1 className="primary">Projects</h1>
            {/* <hr className="hr"/> */}
          </header>
          <section className="projects">
            <article className="project">
              <div className="project__text">
                <div>
                  <h2>Bergen STEM</h2>
                  <div className="project__text-p content">
                    <p>
                      Single page React app created for the STEM Department at
                      Bergen Community College.
                                        </p>
                    <p>
                      Collaborated with backend-developer to create a site that
                      showcases student projects, STEM events, and scholarship
                      opportunities.
                                        </p>
                  </div>
                </div>
                <div className="project--links">
                  <a href="https://www.bergenstem.com" target="_blank">Bergen STEM <span>&rsaquo;</span></a>
                  <a href="#">Github Repo <span>&rsaquo;</span></a>
                </div>
              </div>
              {/* </div> */}
              <div className="project__video">
                <video className="video" autoPlay loop playsInline>
                  <source src={bergen} type="video/mp4" />
                </video>
              </div>
              <div className="project__features">
                <div>
                  <h3>Features:</h3>
                  <div className="project__list">
                    {
                      [
                        'responsive web design (no CSS libraries)',
                        'asset lazy loading',
                        'async fetch requests',
                        'CORS'
                      ].map(skill => {
                        return <span className={"skills__span"}>{skill}</span>
                      })
                    }
                  </div>
                </div>
                <div>
                  <h3>Tech used:</h3>
                  <div className="project__list">
                    {
                      [
                        'React',
                        'Express',
                        'React Router 4',
                        'Webpack 4',
                        'Fetch API'
                      ].map(skill => {
                        return <span className={"skills__span"}>{skill}</span>
                      })
                    }
                  </div>
                </div>
              </div>
            </article>

            <article className="project">
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
                      and read hundreds of article abstracts from a random month.
                                        </p>
                  </div>
                </div>

                <div className="project--links">
                  <a href="https://nytcrands.herokuapp.com/" target="_blank">NYT App <span>&rsaquo;</span></a>
                  <a href="#">Github Repo <span>&rsaquo;</span></a>
                </div>
              </div>
              <div className="project__video">
                <video className="video" autoPlay loop playsInline>
                  <source src={nyt} />
                </video>
              </div>
              <div className="project__features">
                <div>
                  <h3>Features:</h3>
                  <div className="project__list">
                    {
                      [
                        'responsive web design (no CSS libraries)',
                        'asset lazy loading',
                        'thunk action handlers'
                      ].map(skill => {
                        return <span className={"skills__span"}>{skill}</span>
                      })
                    }
                  </div>
                </div>
                <div>
                  <h3>Tech used:</h3>
                  <div className="project__list">

                    {
                      [
                        'React',
                        'Redux',
                        'React Router 4',
                        'Webpack 4',
                        'Sass'
                      ].map(skill => {
                        return <span className={"skills__span"}>{skill}</span>
                      })
                    }
                  </div>
                </div>
              </div>
            </article>

            <article className="project">
              <div className="project__text">
                <div>
                  <h2 className="strong">GatsbyJS Markdown Blog</h2>
                  <div className="project__text-p content">
                    <p>
                      <a href="https://www.gatsbyjs.org/">GatsbyJS</a> build hosted on gitpages.
                                        </p>
                    <p>
                      Features a markdown blog that supports YAML front matter.
                                        </p>
                  </div>
                </div>
                <div className="project--links">
                  <a href="https://dacrands.github.io" target="_blank">Blog Site <span>&rsaquo;</span></a>
                  <a href="#">Github Repo <span>&rsaquo;</span></a>
                </div>
              </div>
              <div className="project__video">
                <video className="video" autoPlay loop playsInline>
                  <source src={blog} />
                </video>
              </div>
              <div className="project__features">
                <div>
                  <h3>Features:</h3>
                  <div className="project__list">
                    {
                      [
                        'Gitpage-hosted React app',
                        'Markdown-friendly blog',
                        'PrismJS syntax highlighting',
                        'YAML Front Matter'
                      ].map(skill => {
                        return <span className={"skills__span"}>{skill}</span>
                      })
                    }
                  </div>
                </div>
                <div>
                  <h3>Tech used:</h3>
                  <div className="project__list">
                    {
                      [
                        'React',
                        'GatsbyJS',
                        'Styled-Components',
                        'GraphQL'
                      ].map(skill => {
                        return <span className={"skills__span"}>{skill}</span>
                      })
                    }
                  </div>
                </div>
              </div>
            </article>

            <article className="project">
              <div className="project__text">
                <div>
                  <h2 className="strong">Flask Smart Frame</h2>
                  <div className="project__text-p content">
                    <p>
                      View the weather, stocks, and a custom yotube video.
                                        </p>
                    <p>
                      
                                        </p>
                  </div>
                </div>
                <div className="project--links">
                  <a href="https://dacrands.github.io" target="_blank">Blog Site <span>&rsaquo;</span></a>
                  <a href="#">Github Repo <span>&rsaquo;</span></a>
                </div>
              </div>
              <div className="project__video">
                <video className="video" autoPlay loop playsInline>
                  <source src={flaskmon} />
                </video>
              </div>
              <div className="project__features">
                <div>
                  <h3>Features:</h3>
                  <div className="project__list">
                    {
                      [
                        'Scrolling stock ticker',
                        'Asynchronously load Youtube videos',
                      
                      ].map(skill => {
                        return <span className={"skills__span"}>{skill}</span>
                      })
                    }
                  </div>
                </div>
                <div>
                  <h3>Tech used:</h3>
                  <div className="project__list">
                    {
                      [
                        'Flask',
                        'Youtube iFrame API',
                        'Jinja2 Templates',                        
                      ].map(skill => {
                        return <span className={"skills__span"}>{skill}</span>
                      })
                    }
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    )
  }
}