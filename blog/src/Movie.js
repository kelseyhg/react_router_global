import React, { Component } from 'react';
import Geese from "./geese.jpg";
import './Post.css';

class Movie extends Component {
  render() {
    return (
      <div className="Home">
        <header className="App-header">
          <h1> Do Geese See God?</h1>
        </header>
  		<img width="300" src={Geese} alt="Geese" />
      </div>
    );
  }
}




export default Movie;