import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Feature from '../Feature/Feature';
import Divider from '../Divider/Divider';
import websites from '../../websites';

function App() {
  return (
    <Container>
      <Divider />
      {
        websites.map((website, i) => (
          <>
            <Feature summaryPath={website.summary} img={website.img} left={i % 2 === 1}/>
            <Divider />
          </>
        ))
      }
    </Container>
  );
}

export default App;
