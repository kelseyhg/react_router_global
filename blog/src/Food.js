import React, { Component } from 'react';
import Olive from "./olive.png";
import './Post.css';

class Food extends Component {
  render() {
    return (
      <div className="Home">
        <header className="App-header">
          <h1> Evil olive</h1>
        </header>
        <img width="400" src={Olive} alt="Olive" />
  
      </div>
    );
  }
}




export default Food;