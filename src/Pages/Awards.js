import React, { Component } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import moment from "moment";
import Button from "react-bootstrap/lib/Button";
import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Card from "react-bootstrap/lib/Card";

class Awards extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={6}>
            {this.props.data.awards.map((item, i) => {
              return (
                <li key={"key" + i}>
                  {item.linkTo ? (
                    <a href={item.linkTo}>{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Awards;
