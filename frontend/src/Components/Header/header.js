import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Container,
  FormControl,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  return (
    <div>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">NotesZipper</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>

            <Nav>
              <Nav.Link href="/mynotes">
                <Link to="/mynotes">My Notes</Link>
              </Nav.Link>

              <NavDropdown title="Chirag Bhayana" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    localStorage.removeItem("userInfo");
                    history.push("/");
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
