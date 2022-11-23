// import Container from "react-bootstrap/Container";
import { NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import '../assets/sass/pages/_navigation.scss';

function Navigation() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate('/');
    dispatch(reset());
  };

  const block = () => {
    const finder = document.getElementById('tirefinder');
    finder.classList.add('d-block');
  };

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
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
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
            {user ? (
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/orders">
                  Orders
                </NavDropdown.Item>
                <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={NavLink} to="/login">
                Login/Reg
              </Nav.Link>
            )}
            {user?.role === 'admin' && (
              <Nav.Link as={NavLink} to="/dashboard">
                Dashboard
              </Nav.Link>
            )}
          </Nav>
          <button onClick={block} className="tire__finder">
            Tire Finder
          </button>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
}

export default Navigation;
