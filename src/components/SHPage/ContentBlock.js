import React from 'react'
import styled from 'styled-components'

const ContentBlockStyles = styled.div`
  @media screen and (min-width: 480px) {
    display: flex;
  }
`

const ContentBlockDisplay = styled.div`
  border: 10px solid #8d980b;
  padding: 60px 40px;
  width: 100%;
  margin: 0 40px;
  @media screen and (max-width: 480px) {
    margin: 0;
    padding: 60px 20px;
  }
  & > p {
    text-align: left !important;
  }
`

const ContentBlockBox = styled.div`
  width: 30%;
  background-color: #8d980b;
  @media screen and (max-width: 480px) {
    display: none;
  }
`

const ContentBlock = ({ children, flip }) => {
  return (
    <ContentBlockStyles>
      {flip ? <ContentBlockBox /> : null}
      <ContentBlockDisplay>{children}</ContentBlockDisplay>
      {!flip ? <ContentBlockBox /> : null}
    </ContentBlockStyles>
  )
}

export default ContentBlock
