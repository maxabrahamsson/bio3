import React, { Component } from "react";
import fetch from "isomorphic-fetch";

import logo from "./logo.svg";
import "./App.css";

type TextItem = {
  text: string,
  linkTo: string
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [{}],
      experiments: [{}],
      publicity: [{}]
    };
  }

  render() {
    return (
      <div className="App">
        <div style={{ width: "100%", float: "left" }}>
          <h2>Publicity</h2>
          {this.renderList(this.state.publicity)}
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
            {this.state.projects.map((project, i) => {
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
            {this.state.experiments.map((project, i) => {
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
    await fetch(
      "https://raw.githubusercontent.com/ayildirim/bio2/gh-pages/data.json"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          projects: responseJson.projects,
          experiments: responseJson.experiments,
          publicity: responseJson.publicity
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

  renderList(list: Array<TextItem>) {
    return (
      <ul>
        {list.map((item, i) => {
          return this.renderTextListItem(item.text, item.linkTo, i);
        })}
      </ul>
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
