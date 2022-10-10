import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = ({
  showAboutMeHandler,
  showResumeHandler,
  showContactHandler,
}) => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>Nick Katzer</Navbar.Brand>
        <Nav>
          <Nav.Link onClick={showAboutMeHandler}>About Me</Nav.Link>
          <Nav.Link onClick={showResumeHandler}>Resume</Nav.Link>
          <Nav.Link onClick={showContactHandler}>Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
