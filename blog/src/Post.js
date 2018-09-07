import React, { Component } from 'react';
import './Post.css';


class Post extends Component {
  render() {
    return (
      <div className="Post">
        <header className="App-header">
          <h1>Test set</h1>
        </header>
        <h1>{this.props.title}</h1>
        <h4>by {this.props.author}</h4>
        <p>{this.props.body}</p>
        <hr />
        <h4> Comments </h4>
         <p>{this.props.comments[0]}</p>
         <p>{this.props.comments[1]}</p>
         <p>{this.props.comments[2]}</p>
      </div>
    );
  }
}

export default Post;