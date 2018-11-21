import React, { Component } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import moment from 'moment';
import Button from 'react-bootstrap/lib/Button';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Papa from 'papaparse';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  exportPDF = () => {
    this.resume.save();
  };

  render() {
    const { data } = this.state;
    if (data.length === 0) return <div />;
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
              paperSize="Letter"
              fileName={`AhmetYildirim_Resume_${moment().format('DDMMYYYY')}.pdf`}
              title=""
              subject=""
              keywords=""
              ref={(r) => {
                this.resume = r;
              }}
            >
              <div
                style={{
                  height: 792,
                  width: 612,
                  padding: 'none',
                  backgroundColor: 'white',
                  boxShadow: '5px 5px 5px black',
                  margin: 'auto',
                  overflowX: 'hidden',
                  overflowY: 'hidden',
                  fontSize: 11,
                  fontFamily: 'Calibri',
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
                          borderBottomColor: 'black',
                          borderBottomStyle: 'solid',
                        }}
                      >
                        Employment
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => {
                      const start = moment(item['Started On'], 'MMM YYYY');
                      const end = moment(item['Finished On'], 'MMM YYYY');
                      return [
                        <tr style={{ fontWeight: 'bold' }}>
                          <td align="left">{item.Title}</td>
                          <td align="center">{item['Company Name']}</td>
                          <td align="right">
                            {`${start.format('MMM YYYY')} ${end.format('MMM YYYY')}`}
                          </td>
                        </tr>,
                        <tr>
                          <td colSpan="3">{item.Description}</td>
                        </tr>,
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

  componentDidMount() {
    this.initialize();
  }

  initialize = async () => {
    await Papa.parse('Positions.csv', {
      header: true,
      delimiter: ',',
      download: true,
      complete: (results) => {
        results.data.pop();
        this.setState({
          data: results.data,
        });
      },
    });
  };
}

export default Resume;
