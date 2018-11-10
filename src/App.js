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

import ReactDOM from "react-dom";

import "./App.scss";

type TextItem = {
  text: string,
  linkTo: string
};

class App extends Component {
  exportPDF = () => {
    this.resume.save();
  };
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  render() {
    if (this.state.data.length === 0) return <div />;
    return (
      <HashRouter>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Ahmet Yildirim</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/#/">Home</Nav.Link>
                <Nav.Link href="/#/pdf/">PDF Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact component={this.Index} />
          <Route path="/pdf/" component={this.Pdf} />
        </div>
      </HashRouter>
    );
  }
  Index = () => this.renderPortfolio();
  Pdf = () => this.renderPDFView();

  renderPDFView() {
    return (
      <div style={{ align: "center", width: "%100" }}>
        <Button variant="primary" onClick={this.exportPDF}>
          Download PDF
        </Button>
        <PDFExport
          paperSize={"Letter"}
          fileName={
            "AhmetYildirim_Resume_" + moment().format("DDMMYYYY") + ".pdf"
          }
          title=""
          subject=""
          keywords=""
          ref={r => (this.resume = r)}
        >
          <div
            style={{
              height: 792,
              width: 612,
              padding: "none",
              backgroundColor: "white",
              boxShadow: "5px 5px 5px black",
              margin: "auto",
              overflowX: "hidden",
              overflowY: "hidden",
              fontSize: 11,
              fontFamily: "Calibri"
            }}
          >
            <table>
              <thead>
                <tr>
                  <th colSpan="3" align="center" style={{ fontSize: 18 }}>
                    Ahmet Yildirim
                  </th>
                </tr>
                <tr>
                  <th
                    colSpan="3"
                    align="center"
                    style={{
                      borderBottomWidth: 2,
                      borderBottomColor: "black",
                      borderBottomStyle: "solid"
                    }}
                  >
                    Employment
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.companies.map((item, i) => {
                  const start = moment(item.start, "DD.MM.YYYY");
                  const end = moment(item.end, "DD.MM.YYYY");
                  return [
                    <tr style={{ fontWeight: "bold" }} key={"tr_" + i}>
                      <td align="left">{item.title}</td>
                      <td align="center">{item.name}</td>
                      <td align="right">
                        {start.format("MMM YYYY")} - {end.format("MMM YYYY")}
                      </td>
                    </tr>,
                    <tr key={"tr2_" + i}>
                      <td colSpan="3">{item.description}</td>
                    </tr>
                  ];
                })}
              </tbody>
            </table>
          </div>
        </PDFExport>
      </div>
    );
  }

  renderPortfolio() {
    return (
      <Container>
        <Row>
          <Col>{this.renderList("Education", this.state.data.education)}</Col>
          <Col>{this.renderList("Profiles", this.state.data.profiles)}</Col>
        </Row>
        <Row>
          <Col>{this.renderList("Publicity", this.state.data.publicity)}</Col>
          <Col>
            {this.renderList(
              "Interests & Characteristics",
              this.state.data.interests
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 id="works">Finished Projects & Works</h2>
            <div className="App-intro">
              {this.state.data.projects.map((project, i) => {
                return this.renderProject(
                  project.image,
                  project.title,
                  project.subtext,
                  project.linkTo,
                  i
                );
              })}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 id="works">Experiments & Concept Projects</h2>
            <div className="App-intro">
              {this.state.data.experiments.map((project, i) => {
                return this.renderProject(
                  project.image,
                  project.title,
                  project.subtext,
                  project.linkTo,
                  i
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
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

  renderProject(
    url: string,
    title: string,
    subtext: string,
    linkTo: string,
    key: number
  ) {
    return (
      <div key={key}>
        <a href={linkTo} className="endislink">
          <div className="endis">
            <div
              className="resim"
              style={{
                backgroundImage: `url(
                  ${url})`
              }}
            >
              <div className="caption">
                <div>
                  {title}{" "}
                  {subtext && <span className="subtext">({subtext})</span>}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }

  renderList(title: string, list: Array<TextItem>) {
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {list.map((item, i) => {
            return this.renderTextListItem(item.text, item.linkTo, i);
          })}
        </ul>
      </div>
    );
  }
  renderTextListItem(text: string, linkTo: string, key: number) {
    return (
      <li key={key}>
        {linkTo ? <a href={linkTo}>{text}</a> : <span>{text}</span>}
      </li>
    );
  }
}

export default App;
