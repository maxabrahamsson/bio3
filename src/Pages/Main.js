import React, { Component } from "react";
import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Image from "react-bootstrap/lib/Image";
import Card from "react-bootstrap/lib/Card";
import Button from "react-bootstrap/lib/Button";

class Main extends Component {
  render() {
    let data = this.props.data;
    return (
      <Container>
        <Row>
          <Col md={6}>{this.renderList("Education", data.education)}</Col>
          <Col md={6}>{this.renderList("Profiles", data.profiles)}</Col>
        </Row>
        <Row>
          <Col md={6}>{this.renderList("Publicity", data.publicity)}</Col>
          <Col md={6}>
            {this.renderList("Interests & Characteristics", data.interests)}
          </Col>
        </Row>
      </Container>
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
  renderProject(
    url: string,
    title: string,
    subtext: string,
    linkTo: string,
    key: number
  ) {
    return (
      <Col md={2}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={url} />
          <Card.Body>
            <Card.Title>
              <Button variant="link" href={linkTo}>
                {title}
              </Button>
            </Card.Title>
            <Card.Text>
              {subtext && <span className="subtext">({subtext})</span>}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Main;
