import React, { Component } from "react";
import {Card, Button} from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Card className="text-center">
  <Card.Header>About</Card.Header>
  <Card.Body>
    <Card.Title>Ringo and Friends</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
  </Card.Body>
</Card>
    );
  }
}
export default About;
