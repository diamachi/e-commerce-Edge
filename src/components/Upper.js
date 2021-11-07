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
        <Container fluid>
          <Navbar.Brand componentClass={Link} to="/" href="/">Myntra Forum</Navbar.Brand>
          <Nav.Link class="nav-list  " componentClass={Link} href="/community" to="/dogs">Community</Nav.Link>
          <Nav.Link class="nav-list  " componentClass={Link} href="/community" to="/dogs">New Arrivals</Nav.Link>
          <Nav.Link class="nav-list  " componentClass={Link} href="/rewards" to="/dogs">Rewards</Nav.Link>

        </Container>
      </Navbar>
    </>
  );
}

export default Upper;
