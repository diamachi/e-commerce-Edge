/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Upper.css";
import { Nav, Container, Navbar, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

function Upper() {
  return (
    <>
      <Navbar sticky="top" bg="light" expand={false} className="color-nav">
        <Container fluid>
          <Navbar.Brand
            className="gradient-text logo"
            componentClass={Link}
            to="/"
            href="/"
          >
            <img
              class="logo-image"
              src="https://i.imgur.com/ksSo1Z3.png"
              width="40"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{" "}
            -Forum
          </Navbar.Brand>

          <Nav.Link
            class="nav-list  "
            componentClass={Link}
            href="/community"
            to="/community"
          >
            <h3>
              <p class="gradient-text">Community</p>
            </h3>
          </Nav.Link>
          <Nav.Link
            class="nav-list  "
            componentClass={Link}
            href="/community"
            to="/community"
          >
            <h3>
              <p class="gradient-text">New Arrivals</p>
            </h3>
          </Nav.Link>
          <Nav.Link
            class="nav-list  "
            componentClass={Link}
            href="/rewards"
            to="/rewards"
          >
            <h3>
              <p class="gradient-text">Rewards</p>
            </h3>
          </Nav.Link>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default Upper;
