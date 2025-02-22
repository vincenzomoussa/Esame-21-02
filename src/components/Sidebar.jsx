import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { BookFill } from "react-bootstrap-icons";
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
          <Navbar.Brand href="#home" className="navbar-brand ">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
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
                  <Link to="/" className="nav-item nav-link d-flex align-items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="36"
                      fill="currentColor"
                      className="bi bi-house-door-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                    </svg>
                    &nbsp; Home
                  </Link>
                </li>

                <li>
                  <Link className="nav-item nav-link d-flex align-items-center mb-3" to="/favourites">
                    <BookFill style={{ width: "24px", height: "24px" }} />
                    &nbsp; Your Library
                  </Link>
                </li>
                <li>
                  <div>
                    <Form className="mt-3 d-flex" onSubmit={handleSubmit}>
                      <FormControl
                        type="text"
                        placeholder="Search"
                        className="no-rounded-right"
                        onChange={(e) => setQuery(e.target.value)}
                      />

                      <Button variant="btn btn-outline-secondary btn-sm no-rounded-left" type="submit">
                        GO
                      </Button>
                    </Form>
                  </div>
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
