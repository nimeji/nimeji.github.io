import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Feature from '../Feature/Feature';
import websites from '../../websites';
import { Discord, EnvelopeFill, Linkedin } from 'react-bootstrap-icons';
import styles from './App.module.scss';

function App() {
  return (
    <div className="px-5 py-3 bg-dark">
      <Row>
        <Col xl={4} xxl={3} className="text-light pb-5">
          <h1>Max Schrodt</h1>
          <p>Im an aspiring frontend developer from germany. I have experience working with Typescript, React, SASS and various UI/UX libraries like Bootstrap and MaterialUI.</p>
          <p>On this website you can find information on some of my previous projects.</p>
          <h4>Contact</h4>
          <div className={styles.FlexColumn}>
            <span><Linkedin /> Linkedin</span>
            <span><EnvelopeFill /> E-Mail</span>
            <span><Discord /> Discord</span>
          </div>
          <div className={styles.FlexColumn}>
            <a href="https://www.linkedin.com/in/max-schrodt-768036218/" className="text-light">Max Schrodt</a>
            <a href="mailto: maxschrodt@gmx.net" className="text-light">maxschrodt@gmx.net</a>
            <span>Nimeji#0719</span>
          </div>
        </Col>
        <Col>
          <Row>
            {
              websites.map((website, i) => (
                <Col key={i} sm={12} md={6} className="py-2">
                  <Feature content={website.content} images={website.images} demo={website.demo} github={website.github} />
                </Col>
              ))
            }
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
