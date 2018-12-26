import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import Card from 'react-bootstrap/lib/Card';
import CardColumns from 'react-bootstrap/lib/CardColumns';
import ReactGA from 'react-ga';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

type Props = {
  data: Object,
};

class Showcase extends Component<Props> {
  render() {
    const { data } = this.props;
    return (
      <Container>
        <Row>
          {data.projects.map((project, i) => this.renderProject(project.image, project.title, project.subtext, project.linkTo, i))}
        </Row>
      </Container>
    );
  }

  renderProject(url: string, title: string, subtext: string, linkTo: string) {
    return (
      <Col md={4}>
        <Card>
          <Card.Img
            variant="top"
            src={url}
            style={{
              width: '100%',
              height: '15vw',
              objectFit: 'cover',
            }}
          />
          <Card.Body>
            <Card.Title>
              <ReactGA.OutboundLink eventLabel={`${linkTo}#${title}`} to={linkTo} target="_blank">
                {title}
              </ReactGA.OutboundLink>
            </Card.Title>
            <Card.Text>{subtext && <span className="subtext">{subtext}</span>}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Showcase;
