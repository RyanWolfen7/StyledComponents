import React from 'react';
import { Container, Header, Button } from './styledComponents/__Controller'

function App() {

  const content = (<>
    <Header backgroundColor='red' color='white' logo='Logo' logoLeft content={<Button label={'A'} />} />
    <Button label={'B'} />
    <Button label={'C'} />
    <Button label={'D'} />
  </>)

  return (
    <Container
      gridThreeSplit
      content={content}
    />
  );
}

export default App;
