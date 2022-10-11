import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import "../assets/sass/pages/_navigation.scss";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="maxxis" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="links mx-auto">
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/news">
              News
            </Nav.Link>
            <Nav.Link as={NavLink} to="/dealer">
              Dealership
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              Login/Reg
            </Nav.Link>
          </Nav>
          <button className="tire__finder">Tire Finder</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
