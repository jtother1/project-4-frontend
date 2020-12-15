import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function NavBar({ user, logOut }) {
  return (
    <>
      <Navbar className='nav'>
      <img src="https://i.pinimg.com/736x/f5/6a/bd/f56abd599430d840613dad212d22622d--pet-boutique-work-on.jpg" alt=""></img>
        <Navbar.Brand href="/home">Ringo and Friends</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          {!user && <Nav.Link href="/signup">Sign Up</Nav.Link>}
          {!user && <Nav.Link href="/login">Log in</Nav.Link>}
          {user && <Nav.Link href="/post">Post</Nav.Link>}
          {user && <Nav.Link onClick={logOut}>Log Out</Nav.Link>}
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button className='search-button'>Search</Button>
        </Form> */}
      </Navbar>
    </>
  );
}
export default NavBar;
