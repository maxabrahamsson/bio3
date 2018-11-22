import React from 'react';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ReactGA from 'react-ga';

type Props = {
  data: Object,
};

function Awards(props: Props) {
  const { data } = props;
  return (
    <Container>
      <Row>
        <Col md={12}>
          {data.awards.map(item => (
            <Row>
              {item.linkTo ? (
                <ReactGA.OutboundLink eventLabel={item.linkTo} to={item.linkTo} target="_blank">
                  {item.text}
                </ReactGA.OutboundLink>
              ) : (
                <span>{item.text}</span>
              )}
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Awards;
