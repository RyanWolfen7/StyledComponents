import React from 'react';
import { Container } from './styledComponents/Container'
import { Header } from './styledComponents/Header'

function App() {

  return (
    <Container
      gridThreeSplit
      content={<><Header backgroundColor='red' color='white' logoRight /></>}
    />
  );
}

export default App;
