import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="shadow-sm py-3"
      style={{ backgroundColor: "#20c997" }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-4"
          style={{ color: "#fff" }}
        >
          Employee Manager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/add"
              className="mx-2 fw-semibold"
              style={{ color: "#fff" }}
              onMouseEnter={(e) => (e.target.style.color = "#e6fcf5")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
              Add Employee
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/"
              className="mx-2 fw-semibold"
              style={{ color: "#fff" }}
              onMouseEnter={(e) => (e.target.style.color = "#e6fcf5")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
              View Employees
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;