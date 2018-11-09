import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import { PDFExport } from "@progress/kendo-react-pdf";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import moment from "moment";
import { HashRouter, Route, Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import Grid from "@material-ui/core/Grid";

import ReactDOM from "react-dom";

import "./App.scss";
import DropdownMenu from "./components/DropdownMenu";
import Profiles from "./components/Profiles";

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
      <MuiThemeProvider>
        <HashRouter>
          <div>
            <AppBar title="Ahmet Yildirim" iconElementLeft={<DropdownMenu />} />
            <Route path="/" exact component={this.Index} />
            <Route path="/pdf/" component={this.Pdf} />
          </div>
        </HashRouter>
      </MuiThemeProvider>
    );
  }
  Index = () => this.renderPortfolio();
  Pdf = () => this.renderPDFView();

  renderPDFView() {
    return (
      <div style={{ align: "center", width: "%100" }}>
        <button onClick={this.exportPDF}>Download PDF</button>
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
      <div>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            {this.renderList("Education", this.state.data.education)}
          </Grid>
          <Grid item xs={6}>
            <Profiles profiles={this.state.data.profiles} />
          </Grid>
          <Grid item xs={6}>
            {this.renderList("Publicity", this.state.data.publicity)}
          </Grid>
          <Grid item xs={6}>
            {this.renderList(
              "Interests & Characteristics",
              this.state.data.interests
            )}
          </Grid>
        </Grid>

        <div style={{ width: "100%", float: "left" }}>
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

const HalfDiv = {
  width: "50%",
  float: "left"
};

export default App;
