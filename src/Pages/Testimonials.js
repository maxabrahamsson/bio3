import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import Card from 'react-bootstrap/lib/Card';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Papa from 'papaparse';

class Testimonials extends Component {
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
      <Container>
        <Row>
          {data.map((item, i) => {
            const fillerElement = (
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {`${item['First Name']} ${item['Last Name'][0]}.`}
                      {`${item['Job Title']} at ${item.Company}`}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
            return [
              i % 2 === 0 ? fillerElement : null,
              <Col className="bubble" md={6}>
                <Card.Body>{item.Text}</Card.Body>
              </Col>,
              i % 2 !== 0 ? fillerElement : null,
            ];
          })}
        </Row>
      </Container>
    );
  }

  componentDidMount() {
    this.initialize();
  }

  initialize = async () => {
    await Papa.parse('Recommendations Received.csv', {
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

export default Testimonials;
