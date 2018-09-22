import React, { Component } from 'react';

export default class Skills extends Component {

  constructor() {
    super();

    this.state = {
        lang: ['JavaScript','NodeJS', 'Python', 'HTML', 'CSS'],
        tools: ['Git', 'Heroku', 'Conda', 'Pip', 'Jupyter Notebooks', 'VSCode'],
        webLibs: ['React', 'Redux', 'Express', 'Sass', 'Webpack','MongoDB'],
        dataLibs: ['Numpy', 'Pandas', 'Matplotlib', 'Seaborn'],
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
        
          <section className="skills__item">
              <h2 className="">Skills</h2>
              {/* <hr className="hr"/> */}
              <div>
                {
                    this.state.skills.map(skill => {
                        return <span className={"skills__span"}>{skill}</span>
                    })
                }
              </div>              
            </section>

            <section className="skills__item">
              <h2 className="">Languages</h2>
              {/* <hr className="hr"/> */}
              <div>
                  {
                      this.state.lang.map(lang => {
                          return <span className={"skills__span"}>{lang}</span>
                      })
                  }
              </div>            
            </section>

            <section className="skills__item">
              <h2 className="">Web Development Libraries</h2>
              {/* <hr className="hr"/> */}
              <div>
                  {
                      this.state.webLibs.map(lib => {
                          return <span className={"skills__span"}>{lib}</span>
                      })
                  }
              </div>                            
            </section>

            <section className="skills__item">
              <h2 className="">Data Science Libraries</h2>
              {/* <hr className="hr"/> */}
              <div>
                  {
                      this.state.dataLibs.map(lib => {
                          return <span className={"skills__span"}>{lib}</span>
                      })
                  }
              </div>                            
            </section>

            <section className="skills__item">
              <h2 className="">Tools</h2>
              {/* <hr className="hr"/> */}
              <div>
                  {
                      this.state.tools.map(tool => {
                          return <span className={"skills__span"}>{tool}</span>
                      })
                  }
              </div>                            
            </section>

        </div>          
      </div>
    )
  }
}