import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import React, { Component } from 'react';
import Post from "./Post.js";
import Home from "./Home.js";
import About from "./About.js";
import Movie from "./Movie.js";
import Food from "./Food.js";
import './Post.css';


const post = {
  title: "Borrow or rob?",
  author: "Anna Renner",
  body: "Was it a car or a cat I saw?",
  comments: ["wow", "dumb mud", "Elite title!"]
}


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/"> Home </Link> |
            <Link to="/post"> My blog </Link> |
            <Link to="/about"> About Me </Link> |
            <Link to="/movie"> Favorite Movie </Link> |
            <Link to="/food"> Favorite Food </Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/post" component={ () =>
            <Post 
            title="Borrow or rob?"
            author="Anna Renner"
            body="Was it a car or a cat I saw?"
            comments={["wow", "dumb mud", "Elite title!"]} />
            }/>
          <Route path="/about" component={About} />
          <Route path="/movie" component={Movie} />
          <Route path="/food" component={Food} />
        </div>
     </Router>
    );
  }
}

export default App;
