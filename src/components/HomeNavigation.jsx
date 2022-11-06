// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import "../assets/sass/pages/_navigation.scss";

function HomeNavigation() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Navbar
      className="px-4"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="maxxis" loading="lazy" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="links mx-auto">
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products">
              Products
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
            {!user && (
              <Nav.Link as={NavLink} to="/login">
                Login/Reg
              </Nav.Link>
            )}
          </Nav>
          <button className="tire__finder">Tire Finder</button>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
}

export default HomeNavigation;
