import React,  { Component } from 'react';


export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <header className="header">
            <h1 className={"primary"}>Contact</h1>
          </header>
          <form className="contact" action="https://formspree.io/davecrands@gmail.com" method="POST">
            <div className="contact__item">
                <label htmlFor="name">Name</label>
                <input type="text"/>                      
            </div>
            <div className="contact__item">
              <label htmlFor="email">Email</label>            
              <input type="email" name="_replyto"/>          
            </div>
            <div className="contact__item">
              <label htmlFor="message">Message</label>         
              <br/>
              <textarea name="message" id="message" cols="30" rows="10" placeholder={"Hey Dave, \n\nThis site rocks! Thanks for making it. \n\nRegards,\nTextarea Placeholder"}></textarea>
            </div>                
            <button className="button" type="submit">Send <span>&rsaquo;</span> </button>
            {/* <input className="button" type="submit" value="Send &rsaquo;"/>               */}
          </form>
        </div>
      </div>
    );
  }
}