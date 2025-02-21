import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchTracks } from "../redux/actions/searchAction";

const Sidebar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchTracks(query));
  };
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
                  <Form className="mt-4 d-flex" onSubmit={handleSubmit}>
                    <div className="flex-grow-1">
                      <FormControl
                        type="text"
                        placeholder="Search"
                        className="no-rounded-right"
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </div>
                    <Button variant="outline-secondary me-3 no-rounded-left" type="submit">
                      GO
                    </Button>
                  </Form>
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
