/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Upper.css";
import {
  NavDropdown,
  Nav,
  Offcanvas,
  Container,
  Button,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from 'react-router-dom'

function Upper() {
  return (
    <>
      <Navbar sticky="top" bg="light" expand={false}>
        <Container ></Container>
        <Container fluid>
          <Navbar.Brand href="#">Myntra Forum</Navbar.Brand>
          <Nav.Link class="nav-list  " as={Link} to="/" href="#Community">Community</Nav.Link>
          <Nav.Link class="nav-list  " as={Link} to="/" href="#New Arrivals">New Arrivals</Nav.Link>
          <Nav.Link class="nav-list  " as={Link} to="/order" href="#Rewards">Rewards</Nav.Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Community</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Upper;
