import React from 'react'
import styled, { css } from 'styled-components'

export const button = (props) => {
  const { onClick, label } = props
  let Div = StandardButton

  return (
    <Div onClick={onClick}>
      {label}
    </Div>
  )
}

const StandardButton = styled.button`
`
