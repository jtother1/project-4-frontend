import React, { Component } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";
class Post extends Component {
//   constructor(props) {
//     super(props);
//   }
  render() {
    return (
      <Card className="my-3">
        <Card.Body>
          <Card.Title>{this.props.post.title}</Card.Title>
          <Card.Text>{this.props.post.body}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {this.props.post.comments.map((comment, index) => {
            return <ListGroupItem key={index}>{comment}</ListGroupItem>;
          })}
        </ListGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Post a comment"
            
          />
          <InputGroup.Append>
            <Button variant="primary">Comment</Button>
          </InputGroup.Append>
        </InputGroup>
      </Card>
    );
  }
}
export default Post;
