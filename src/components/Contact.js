import React,  { Component } from 'React';


export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <header className="header">
            <h1 className={"primary"}>Contact</h1>
          </header>
          <form className="contact" action="">
            <div className="contact__item">
                <label htmlFor="name">Name</label>
                <input type="text"/>                      
            </div>
            <div className="contact__item">
              <label htmlFor="email">Email</label>            
              <input type="email"/>          
            </div>
            <div className="contact__item">
              <label htmlFor="message">Message</label>         
              <br/>
              <textarea name="message" id="message" cols="30" rows="10" placeholder={"Hey Dave, \n\nThis site rocks! Thanks for making it. \n\nRegards,\nTextarea Placeholder"}></textarea>
            </div>                
            <input type="submit"/>              
          </form>
        </div>
      </div>
    );
  }
}