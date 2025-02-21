import { Button, Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="col col-2">
      <Navbar expand="lg" className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <Container className="d-flex flex-column align-items-start">
          <Navbar.Brand href="#home" className="navbar-brand mb-1">
            <img src={logo} alt="Spotify Logo" width="130" height="40" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbarNavAltMarkup"
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="navbar-nav">
              <ul>
                <li>
                  <Link to="/" className="nav-item nav-link d-flex align-items-center mb-3">
                    <HouseDoorFill style={{ width: "24px", height: "24px" }} />
                    &nbsp; Home
                  </Link>
                </li>

                <li>
                  <Link className="nav-item nav-link d-flex align-items-center mb-4" to="/favourites">
                    <BookFill style={{ width: "24px", height: "24px" }} />
                    &nbsp; Your Library
                  </Link>
                </li>
                <li>
                  <InputGroup className="mt-3">
                    <Form.Control placeholder="Search" type="text" aria-label="Search" />

                    <Button variant="outline-secondary" className="btn btn-sm ">
                      GO
                    </Button>
                  </InputGroup>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <div>
            <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
          </div>
        </div>
      </Navbar>
    </aside>
  );
};

export default Sidebar;
