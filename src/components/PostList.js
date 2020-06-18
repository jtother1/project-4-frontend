import React, { Component } from "react";
import DogApi from "../DogApi.js";
import Post from "./Post";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }
  componentDidMount() {
    this.getPosts();
    this.getComments();
  }
  getPosts() {
    DogApi.getAllPosts().then((response) => {
      this.setState({ posts: response.data });
    });
  }
  getComments() {
    DogApi.getAllComments().then((response) => {
      let commentsByPost = {};
      Object.keys(response.data).forEach((currentCommentId) => {
        let currentComment = response.data[currentCommentId];
        let postId = currentComment.post;

        if (commentsByPost[postId]) {
          commentsByPost[postId].push(currentComment);
        } else {
          commentsByPost[postId] = [currentComment];
        }
      });
      this.setState({ comments: commentsByPost });
      console.log(this.state.comments);
    });
  }
  displayComments(currentPost) {
    if (this.state.comments && this.state.comments[currentPost]) {
      let comments = this.state.comments[currentPost];
      return comments.map((currentComment) => {
        return (
          <div className="comments" key={currentComment.body}>
            {currentComment.body}
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="posts">
        {this.state.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
        {/* {Object.keys(this.state.posts).map((postkey, index) => {
            
            let post = this.state.posts[postkey]
          return (
              
            <div className="post" key={post.id+''+index}> 
              <h3>{post.title}</h3>
              <p>{post.body}</p>
          <div className="comments">{this.displayComments(post.id)}</div>
          
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default PostList;
