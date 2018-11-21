import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

type Props = {
  data: Object,
};

class Main extends Component<Props> {
  render() {
    const { data } = this.props;
    return (
      <Container>
        <Row>
          <Col md={6}>{this.renderList('Education', data.education)}</Col>
          <Col md={6}>{this.renderList('Profiles', data.profiles)}</Col>
        </Row>
        <Row>
          <Col md={6}>{this.renderList('Publicity', data.publicity)}</Col>
          <Col md={6}>{this.renderList('Interests & Characteristics', data.interests)}</Col>
        </Row>
      </Container>
    );
  }

  renderList(title: string, list: Array<Object>) {
    return (
      <div>
        <h2>{title}</h2>
        <ul>{list.map((item, i) => this.renderTextListItem(item.text, item.linkTo, i))}</ul>
      </div>
    );
  }

  renderTextListItem(text: string, linkTo: string, key: number) {
    return <li key={key}>{linkTo ? <a href={linkTo}>{text}</a> : <span>{text}</span>}</li>;
  }
}

export default Main;
