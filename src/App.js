import React, { Component } from "react";
import fetch from "isomorphic-fetch";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [{}]
    };
  }

  render() {
    return (
      <div className="App">
        <div style={{ width: "100%", float: "left" }}>
          <h2 id="works">Finished Projects and Works</h2>
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
        this.setState({ projects: responseJson.projects });
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
                  {title}
                  {subtext && <span>({subtext})</span>}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default App;
