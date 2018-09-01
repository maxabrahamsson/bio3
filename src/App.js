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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
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
    );
  }
  componentDidMount() {
    this.initialize();
  }

  initialize = async () => {
    await fetch("http://localhost:3000/data.json")
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
