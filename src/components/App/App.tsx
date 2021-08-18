import React from 'react';
import './App.css';
import { Col, Row, Container } from 'react-bootstrap';
import Feature from '../Feature/Feature';
import Divider from '../Divider/Divider';
import websites from '../../websites';

function App() {
  return (
    <Container>
      <Divider />
      <Row>
        {
          websites.map((website, i) => (
            <Col key={i} lg={4} className="py-2">
              <Feature summaryPath={website.summary} img={website.img} demoLink={website.demoLink} ghLink={website.ghLink} detailsPath={website.details} />
            </Col>
          ))
        }
      </Row>
      <Divider />
    </Container>
  );
}

export default App;
