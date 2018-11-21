import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Card from 'react-bootstrap/lib/Card';
import CardColumns from 'react-bootstrap/lib/CardColumns';

type Props = {
  data: Object,
};

class Showcase extends Component<Props> {
  render() {
    const { data } = this.props;
    return (
      <Container>
        <CardColumns>
          {data.projects.map((project, i) => this.renderProject(project.image, project.title, project.subtext, project.linkTo, i))}
        </CardColumns>
      </Container>
    );
  }

  renderProject(url: string, title: string, subtext: string, linkTo: string) {
    return (
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
            <Button variant="link" href={linkTo}>
              {title}
            </Button>
          </Card.Title>
          <Card.Text>
            {subtext && (
            <span className="subtext">
(
              {subtext}
)
            </span>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Showcase;
