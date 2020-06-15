import React, { Component } from "react";
import DogApi from "../DogApi.js";
import PostList from '../components/PostList.js';
// import Postlist from "../components/PostList.js";
// import Comments from '../components/Comments.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: "loading..." };
  }
  componentDidMount() {
    this.getPosts();
  }
  getPosts() {
    DogApi.getAllPosts().then((response) => {
      this.setState({ posts: response.data });
      
    });
    // this.setState({
    // });
  }

  render() {
    return (
      <div className="home">
        <h1>Ringo and Friends</h1>
        <PostList />
    
        
      </div>
    );
  }
}

export default Home;
