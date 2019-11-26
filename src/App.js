import React from 'react';
import { Container } from './styledComponents/Container'

function App() {

  return (
    <Container
      gridThreeSplit
      content={<h1> Hello World </h1>}
      backgroundColor='red'
      color='white'
    />
  );
}

export default App;
