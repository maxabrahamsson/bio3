import React, { Component } from "react";
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
        <p className="App-intro">
          {this.state.projects.map((project, i) => {
            return this.renderProject(
              project.image,
              project.title,
              project.subtext,
              project.linkTo
            );
          })}
        </p>
      </div>
    );
  }
  componentWillMount() {
    fetch("http://localhost:3000/data.json")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ projects: responseJson.projects });
      })
      .catch(error => {
        console.error(error);
      });
  }

  renderProject(url: string, title: string, subtext: string, linkTo: string) {
    return (
      <span>
        <a href="#" class="endislink">
          <div class="endis">
            <div
              class="resim"
              style={{
                backgroundImage: `url(
                  ${url})`
              }}
            >
              <a class="caption" href={linkTo}>
                <div>
                  {title}
                  {subtext && <span>({subtext})</span>}
                </div>
              </a>
            </div>
          </div>
        </a>
      </span>
    );
  }
}

export default App;
