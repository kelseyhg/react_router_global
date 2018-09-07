import React, { Component } from 'react';
import Adam from "./adam.jpg";
import './Post.css';

class About extends Component {
  render() {
    return (
      <div className="Home">
        <header className="App-header">
          <h1> Madam — I'm Adam</h1>
        </header>
  		<img width="400" src={Adam} alt="Adam" />
      </div>
    );
  }
}




export default About;