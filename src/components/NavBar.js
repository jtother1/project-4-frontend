import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/home">Ringo and Friends</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/login">Log in</Nav.Link>
          <Nav.Link href="/logout">Log Out</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}
export default NavBar;
