import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { HashRouter, Route } from 'react-router-dom';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import Alert from 'react-bootstrap/lib/Alert';

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

class App extends Component {
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
      <HashRouter>
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
              <Alert.Link href="https://github.com/ayildirim/bio2">
                {"See what's cooking"}
              </Alert.Link>
            </Alert>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Navbar>
          <Route path="/" exact component={() => <Main data={data} />} />
          {Pages.map(page => (
            <Route
              path={`/${camelize(page.link)}`}
              exact
              component={() => React.createElement(page.component, { data }, '')}
            />
          ))}
        </div>
      </HashRouter>
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

export default App;
