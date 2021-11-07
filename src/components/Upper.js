/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Upper.css";
import {
  Nav,
  Container,
  Navbar, Form, FormControl
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function Upper() {
  return (
    <>
      <Navbar sticky="top" bg="light" expand={false} className="color-nav">
        <Container fluid>
          <Navbar.Brand componentClass={Link} to="/" href="/">Myntra<span class="gradient-text">Forum</span></Navbar.Brand>
          <Nav.Link class="nav-list  " componentClass={Link} href="/community" to="/community"><h3><p class="gradient-text">Community</p></h3></Nav.Link>
          <Nav.Link class="nav-list  " componentClass={Link} href="/community" to="/community"><h3><p class="gradient-text">New Arrivals</p></h3></Nav.Link>
          <Nav.Link class="nav-list  " componentClass={Link} href="/rewards" to="/rewards"><h3><p class="gradient-text">Rewards</p></h3></Nav.Link>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/>
           </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default Upper;
