/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './components/Sidebar';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />
      <Card />
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            this is a test
          </Col>
        </Row>

      </Container>
      {/* genchat */}
    </div>
  );
}

export default App;
