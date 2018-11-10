import React, { Component } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import moment from "moment";
import Button from "react-bootstrap/lib/Button";
import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Card from "react-bootstrap/lib/Card";

class CaseStudies extends Component {
  render() {
    return (
      <Container>
        <Row>
          {this.props.data.experiments.map((project, i) => {
            return this.renderProject(
              project.image,
              project.title,
              project.subtext,
              project.linkTo,
              i
            );
          })}
        </Row>
      </Container>
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
      <Col xs={6} md={3}>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={url}
            style={{
              width: "100%",
              height: "15vw",
              objectFit: "cover"
            }}
          />
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

export default CaseStudies;
