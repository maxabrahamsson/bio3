/**
 * Original Source code from https://reacttraining.com/react-router/web/example/basic
 */

import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import Alert from 'react-bootstrap/lib/Alert';
import ReactGA from 'react-ga';
import withTracker from './withTracker';

// Pages
import Main from './Pages/Main';
import Resume from './Pages/Resume';
import Showcase from './Pages/Showcase';
import CaseStudies from './Pages/CaseStudies';
import Awards from './Pages/Awards';
import Talks from './Pages/Talks';
import Testimonials from './Pages/Testimonials';

const Pages = [
  { component: Main, link: 'Home' },
  { component: Resume, link: 'Resume' },
  { component: Showcase, link: 'Showcase' },
  { component: CaseStudies, link: 'Case Studies' },
  { component: Awards, link: 'Awards' },
  { component: Talks, link: 'Talks' },
  { component: Testimonials, link: 'Testimonials' },
];

const camelize = function camelize(str) {
  return str.replace(/\W+(.)/g, (match, chr) => chr.toUpperCase());
};

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    const { data } = this.state;
    if (data.length === 0) return <div />;
    return (
      <Router>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/#/home">Ahmet Yildirim</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {Pages.map(page => (
                  <Nav.Link href={`/#/${camelize(page.link)}`}>{page.link}</Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
            <Alert key="info" variant="info">
              {'Under construction - '}
              <ReactGA.OutboundLink
                eventLabel="https://github.com/ayildirim/bio2"
                to="https://github.com/ayildirim/bio2"
                target="_blank"
              >
                See what's cooking
              </ReactGA.OutboundLink>
            </Alert>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Navbar>
          <Route path="/" exact component={withTracker(Main, { data })} />
          {Pages.map(page => (
            <Route
              path={`/${camelize(page.link)}`}
              exact
              component={withTracker(page.component, { data })}
            />
          ))}
        </div>
      </Router>
    );
  }

  componentDidMount() {
    this.initialize();
  }

  initialize = async () => {
    await fetch('data.json')
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export default AppRouter;
