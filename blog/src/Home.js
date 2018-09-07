import React, { Component } from 'react';
import Maps from "./spammaps.jpg";
import './Post.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="App-header">
          <h1> Maps, DNA, and Spam</h1>
        </header>
  		<img width="400" src={Maps} alt="Maps" />
      </div>
    );
  }
}




export default Home;