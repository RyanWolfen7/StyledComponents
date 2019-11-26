import React from 'react'
import styled, { css } from 'styled-components'

export const Container = (props) => {
  const { content, gridThreeSplit, backgroundColor, color } = props
  const styles = { backgroundColor, color }
  let Div = ''

  if (gridThreeSplit) { Div = GridThreeSplit }

  return (
    <Div elements={styles}>
      {content}
    </Div>
  )
}

const GridThreeSplit = styled.div`
&& 
{
  ${props => console.log(props)}
  display: grid;
  grid-template-columns: 15vw 35vw 35vw 15vw;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    ". main main sidebar"
    "footer footer footer footer";
  background-color: ${props => props.elements.backgroundColor ? props.elements.backgroundColor : '#ffff'}
  color: ${props => props.elements.color ? props.elements.color : 'black'}
  
}
`
