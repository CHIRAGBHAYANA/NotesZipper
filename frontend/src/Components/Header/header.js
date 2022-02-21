import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Container,
  FormControl,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../actions/userAction";
import "./header.css";

function Header({ setSearch }) {
  const history = useHistory();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <div>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">NotesZipper</Link>
          </Navbar.Brand>
          {userInfo ? (
            <>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="m-auto">
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </Form>
                </Nav>

                <Nav>
                  <Nav.Link>
                    <Link to="/mynotes">My Notes</Link>
                  </Nav.Link>

                  <NavDropdown
                    title={userInfo?.name}
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="/profile">
                      My Profile
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </>
          ) : (
            <Nav>
              <Nav.Link>
                <Link to="/login">Login</Link>
              </Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
