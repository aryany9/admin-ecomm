import React from 'react'
import { styled } from 'styled-components'

const CardContainer = styled.div`
    display: inline-flex;
    background: #f9f9f9;
    color: black;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    flex-direction: column;
    gap: 10px;
`

function Card({children}) {
  return (
    <CardContainer>
        {children}
    </CardContainer>
  )
}

export default Card