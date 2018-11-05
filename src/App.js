import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import isCircleci from "is-circleci";

import logo from "./logo.svg";
import "./App.scss";

type TextItem = {
  text: string,
  linkTo: string
};

let host =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1" ||
  isCircleci === false
    ? "http://localhost:3000"
    : "http://www.ahmet.se";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    if (this.state.data.length == 0) return <div />;
    return (
      <div className="App">
        <div style={{ width: "100%", float: "left" }}>
          {this.renderList("Education", this.state.data.education)}
          {this.renderList("Profiles", this.state.data.profiles)}
        </div>
        <div style={{ width: "100%", float: "left" }}>
          {this.renderList("Publicity", this.state.data.publicity)}
          {this.renderList(
            "Interests & Characteristics",
            this.state.data.interests
          )}
        </div>
        <div style={{ width: "100%", float: "left" }}>
          <h2 id="works">Finished Projects & Works</h2>
          <div style={{ width: "100%", float: "left" }} align="left">
            Due to privacy policies of some of my clients, I can not publicly
            share direct demos of some projects. Please contact for further
            information.
            <p>
              This section of the portfolio was last updated on 2017 March.
              Please visit my LinkedIn profile for more up-to-date portfolio.
            </p>
          </div>
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
        </div>
        <div style={{ width: "100%", float: "left" }}>
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
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.initialize();
  }

  initialize = async () => {
    await fetch(host + "/data.json")
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
      <div style={HalfDiv}>
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

const HalfDiv = {
  width: "50%",
  float: "left"
};

export default App;
