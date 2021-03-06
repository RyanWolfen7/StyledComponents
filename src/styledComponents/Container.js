import React from 'react'
import styled, { css } from 'styled-components'

export const container = (props) => {
  const { content, gridThreeSplit, gridWaffel, backgroundColor, color } = props
  const styles = { backgroundColor, color }
  let Div = ''

  if (gridThreeSplit) { Div = GridThreeSplit }
  if (gridWaffel) { Div = GridWaffel }

  return (
    <Div elements={styles}>
      {content}
    </Div>
  )
}

const GridThreeSplit = styled.div`
&& 
{
  max-width: 115rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  background-color: ${props => props.elements.backgroundColor ? props.elements.backgroundColor : '#ffff'}
  color: ${props => props.elements.color ? props.elements.color : 'black'}
  
}
`

const GridWaffel = styled.div`
&&
{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr; 
  grid-column-gap: 1vw;
  grid-row-gap: 1vh;
  background-color: ${props => props.elements.backgroundColor ? props.elements.backgroundColor : '#ffff'}
  color: ${props => props.elements.color ? props.elements.color : 'black'}
}
`
