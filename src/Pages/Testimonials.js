import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import Card from 'react-bootstrap/lib/Card';
import CardDeck from 'react-bootstrap/lib/CardDeck';
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
        <CardDeck>
          {data.map(item => (
            <Card>
              <Card.Header>{`${item['First Name']} ${item['Last Name'][0]}.`}</Card.Header>
              <Card.Body>
                <Card.Title>{`${item['Job Title']} at ${item.Company}`}</Card.Title>
                {item.Text}
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
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
