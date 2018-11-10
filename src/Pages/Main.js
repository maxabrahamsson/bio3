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

class Main extends Component {
  render() {
    let data = this.props.data;
    return (
      <Container>
        <Row>
          <Col md={6}>{this.renderList("Education", data.education)}</Col>
          <Col md={6}>{this.renderList("Profiles", data.profiles)}</Col>
        </Row>
        <Row>
          <Col md={6}>{this.renderList("Publicity", data.publicity)}</Col>
          <Col md={6}>
            {this.renderList("Interests & Characteristics", data.interests)}
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h2 id="works">Finished Projects & Works</h2>
            <div className="App-intro">
              {data.projects.map((project, i) => {
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
          <Col md={12}>
            <h2 id="works">Experiments & Concept Projects</h2>
            <div className="App-intro">
              {data.experiments.map((project, i) => {
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
}

export default Main;
