import React, { Component } from "react";
import DogApi from "../../DogApi.js";

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
      console.log(response.data);
    });
    // this.setState({
    // });
  }

  render() {
    return (
      <div className="home">
        <h1>Ringo and Friends</h1>
        {Object.keys(this.state.posts).map((postkey, index) => {
            console.log(postkey)
            let post = this.state.posts[postkey]
          return (
              
            <div key={post.id+''+index}> 
              <h3>{post.title}</h3>
              <p>{post.body}</p>
          <div>{post.updated}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
