import React from "react";
import { Link } from "react-router-dom";
// import "./Header.css";
import useFirebase from "../../Hooks/useFirebase";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const { handleLogout, user } = useFirebase();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <span className="text-warning ms-1">ToDo</span>
            <span className="text-success">List</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Link to="/todo">
              <button className="btn-primary">TODO</button>
            </Link>
            {user?.email || user?.displayName ? (
              <div className="d-flex justify-content-center">
                <button className="btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Navbar.Text>
              Signed in as:{" "}
              <a href="#login">{user?.displayName || user?.email}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
