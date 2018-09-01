import React, { Component } from 'react';

export default class Skills extends Component {

  constructor() {
    super();

    this.state = {
        lang: ['Python', 'NodeJS', 'JavaScript','HTML', 'CSS/Sass'],
        frameworks: ['React', 'Redux'],
        libs: ['React', 'Redux', 'Express', 'Sass', 'Webpack','MongoDB'],
        skills: ['Responsive Web Design', 'Semantic HTML', 'REST APIs', 'Ajax', 'Data Visualization', 'Public Speaking']
    }
  }

  render() {
    return (
      <div>
        <div className="container">
        <header className="header">
          <h1 className="primary">Skills</h1>
        </header>
        
          <section className="about--skill">
              <h3 className="">Skills</h3>
              <hr className="hr"/>
              <div>
                {
                    this.state.skills.map(skill => {
                        return <span>{skill}</span>
                    })
                }
              </div>              
            </section>

            <section className="about--skill">
              <h3 className="">Languages</h3>
              <hr className="hr"/>
              <div>
                  {
                      this.state.lang.map(lang => {
                          return <span>{lang}</span>
                      })
                  }
              </div>            
            </section>

            <section className="about--skill">
              <h3 className="">Libraries</h3>
              <hr className="hr"/>
              <div>
                  {
                      this.state.libs.map(lib => {
                          return <span>{lib}</span>
                      })
                  }
              </div>                            
            </section>

        </div>          
      </div>
    )
  }
}