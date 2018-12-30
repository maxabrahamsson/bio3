import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import Card from 'react-bootstrap/lib/Card';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ReactGA from 'react-ga';

type Props = {
  data: Object,
};

class CaseStudies extends Component<Props> {
  renderProject(url: string, title: string, subtext: string, linkTo: string) {
    return (
      <Col md={4}>
        <ReactGA.OutboundLink eventLabel={`${linkTo}#${title}`} to={linkTo} target="_blank">
          <Card className="ProjectCard">
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
              <Card.Title>{title}</Card.Title>
              <Card.Text>{subtext && <span className="subtext">{subtext}</span>}</Card.Text>
            </Card.Body>
          </Card>
        </ReactGA.OutboundLink>
      </Col>
    );
  }

  render() {
    const { data } = this.props;
    return (
      <Container>
        <Row>
          {data.experiments.map(project => this.renderProject(project.image, project.title, project.subtext, project.linkTo))}
        </Row>
      </Container>
    );
  }
}

export default CaseStudies;
