import React from 'react'
import styled from 'styled-components'

const ContentBlockStyles = styled.div`
  display: flex;
`

const ContentBlockDisplay = styled.div`
  border: 10px solid rgb(223, 212, 97);
  padding: 60px 40px;
  margin: 0 40px;
  width: 100%;
  & > p {
    text-align: left !important;
  }
`

const ContentBlockBox = styled.div`
  width: 30%;
  background-color: rgb(223, 212, 97);
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
