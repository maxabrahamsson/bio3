import React, { Component } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import moment from "moment";
import Nav from "react-bootstrap/lib/Nav";
import Navbar from "react-bootstrap/lib/Navbar";
import Button from "react-bootstrap/lib/Button";
import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Alert from "react-bootstrap/lib/Alert";

class Resume extends Component {
  exportPDF = () => {
    this.resume.save();
  };
  render() {
    return (
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center">
            <Button variant="primary" onClick={this.exportPDF}>
              Download PDF
            </Button>
          </Col>
          <Col md={12}>
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
                    {this.props.companies.map((item, i) => {
                      const start = moment(item.start, "DD.MM.YYYY");
                      const end = moment(item.end, "DD.MM.YYYY");
                      return [
                        <tr style={{ fontWeight: "bold" }} key={"tr_" + i}>
                          <td align="left">{item.title}</td>
                          <td align="center">{item.name}</td>
                          <td align="right">
                            {start.format("MMM YYYY")} -{" "}
                            {end.format("MMM YYYY")}
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Resume;
