/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Upper.css";
import {
  Nav,
  Container,
  Navbar,
} from "react-bootstrap";
import { Link } from 'react-router-dom'

function Upper() {
  return (
    <>
      <Navbar sticky="top" bg="light" expand={false} className="color-nav">
        <Container fluid>
          <Navbar.Brand componentClass={Link} to="/" href="/">Myntra Forum</Navbar.Brand>
          <Nav.Link class="nav-list  " componentClass={Link} href="/community" to="/community"><h3><p class="text-dark font-weight-bold">Community</p></h3></Nav.Link>
          <Nav.Link class="nav-list  " componentClass={Link} href="/community" to="/community"><h3><p class="text-dark font-weight-bold">New Arrivals</p></h3></Nav.Link>
          <Nav.Link class="nav-list  " componentClass={Link} href="/rewards" to="/rewards"><h3><p class="text-dark font-weight-bold">Rewards</p></h3></Nav.Link>

        </Container>
      </Navbar>
    </>
  );
}

export default Upper;
