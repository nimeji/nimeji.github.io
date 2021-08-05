import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Feature from '../Feature/Feature';
import Divider from '../Divider/Divider';

function App() {
  return (
    <Container>
      <Divider />
      <Feature title="Feature 1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis nibh vel feugiat pharetra. Proin nunc augue, placerat cursus lacus vitae, dictum imperdiet tellus. Sed dui ex, pretium posuere molestie sit amet, auctor ornare felis. Praesent quis nunc eget nunc ultricies porta ut a arcu. Nam eu lorem lacus. Cras feugiat orci laoreet lorem vehicula commodo. In placerat sem quis enim molestie varius. Morbi id luctus sem. Aenean hendrerit eget ligula eget ullamcorper. Maecenas hendrerit tortor consequat commodo auctor. Ut eget tempus mauris, ac tempus odio. Ut pharetra leo erat, sed mattis eros elementum at. Pellentesque maximus rhoncus nisi, in lobortis elit laoreet a. Morbi hendrerit erat vel risus elementum lobortis.
      </Feature>
      <Divider />
      <Feature title="Feature 2" left>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis nibh vel feugiat pharetra. Proin nunc augue, placerat cursus lacus vitae, dictum imperdiet tellus. Sed dui ex, pretium posuere molestie sit amet, auctor ornare felis. Praesent quis nunc eget nunc ultricies porta ut a arcu. Nam eu lorem lacus. Cras feugiat orci laoreet lorem vehicula commodo. In placerat sem quis enim molestie varius. Morbi id luctus sem. Aenean hendrerit eget ligula eget ullamcorper. Maecenas hendrerit tortor consequat commodo auctor. Ut eget tempus mauris, ac tempus odio. Ut pharetra leo erat, sed mattis eros elementum at. Pellentesque maximus rhoncus nisi, in lobortis elit laoreet a. Morbi hendrerit erat vel risus elementum lobortis.
      </Feature>
      <Divider />
    </Container>
  );
}

export default App;
