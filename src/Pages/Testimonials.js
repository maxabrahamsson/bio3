import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import Card from 'react-bootstrap/lib/Card';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
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
          {data.map(item => (
            <Col md={6}>
              <Card
                style={{
                  width: '100%',
                  height: '15vw',
                  objectFit: 'cover',
                  marginBottom: '15px',
                }}
              >
                <Card.Header>
                  {`${item['First Name']} ${item['Last Name'][0]}.`}
                  {' '}
-
                  {' '}
                  {`${item['Job Title']} at ${item.Company}`}
                </Card.Header>
                <Card.Body>{item.Text}</Card.Body>
              </Card>
            </Col>
          ))}
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
