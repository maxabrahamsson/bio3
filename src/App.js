import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import { PDFExport } from "@progress/kendo-react-pdf";
import moment from "moment";
import { HashRouter, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/lib/Nav";
import Navbar from "react-bootstrap/lib/Navbar";
import Button from "react-bootstrap/lib/Button";
import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Alert from "react-bootstrap/lib/Alert";

import ReactDOM from "react-dom";

import "./App.scss";
import Main from "./Pages/Main";
import Resume from "./Pages/Resume";

type TextItem = {
  text: string,
  linkTo: string
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  render() {
    if (this.state.data.length === 0) return <div />;
    let resume = <Resume companies={this.state.data.companies} />;
    let main = <Main data={this.state.data} />;
    return (
      <HashRouter>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/#/">Ahmet Yildirim</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/#/">Home</Nav.Link>
                <Nav.Link href="/#/pdf/">PDF Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Alert key="info" variant="info">
              Under construction -{" "}
              <Alert.Link href="https://github.com/ayildirim/bio2">
                See what's cooking
              </Alert.Link>
            </Alert>
          </Navbar>
          <Route path="/" exact component={() => main} />
          <Route path="/pdf/" component={() => resume} />
        </div>
      </HashRouter>
    );
  }

  componentDidMount() {
    this.initialize();
  }

  initialize = async () => {
    await fetch("data.json")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          data: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
}

export default App;
