import React from 'react'
import styled, { css } from 'styled-components'


export const Header = (props) => {
  const { logoLeft, logoRight, logo, content, backgroundColor, color, bottomBorder, topBorder } = props
  const styles = { backgroundColor, color, bottomBorder, topBorder }
  let logoStyles = {}

  if (logoLeft) { logoStyles = { gridColumn: '1 / 3' } }
  if (logoRight) { logoStyles = { gridColumn: '5 / 7' } }

  return (
    <Wrapper elements={styles}>
      <LogoWrapper elements={logoStyles}> {logo} header </LogoWrapper>
      {content}
    </Wrapper>
  )
}

const Wrapper = styled.div`
&&
{
  grid-column: 1 / 3 end
  display: grid
  grid-column-gap: 1vw;
  grid-template-columns: repeat(6, 1fr);
  height: 15vh
  background-color: ${props => props.elements.backgroundColor ? props.elements.backgroundColor : '#ffff'}
  color: ${props => props.elements.color ? props.elements.color : 'black'}
  border-top: ${props => props.elements.topBorder ? props.elements.topBorder : 'none'}
  border-bottom: ${props => props.elements.bottomBorder ? props.elements.bottomBorder : 'none'}
}
`

const LogoWrapper = styled.div`
grid-column: ${props => props.elements.gridColumn ? props.elements.gridColumn : ' 1 / 3'}
place-self: center
`
