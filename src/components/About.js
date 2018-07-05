import React, { Component } from 'react';

export default class Hello extends Component {
    render() {
        return(
            <div>
                <div className="container">
                    <div className="center">
                        <h1>About</h1>
                        <hr className="hr"/>
                        <p>I really enjoy building websites using
                            react, webpack, and express.
                        </p>
                        <p>
                            My apps are responsive, fast, and
                            intuitive.
                        </p>
                    </div>                
                </div>            
            </div>
        );
    }
};