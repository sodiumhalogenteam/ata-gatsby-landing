import React, { useState } from 'react'
import styled from 'styled-components'

const Question = styled.div`
  border: solid 1px rgb(223, 212, 97);
  background-color: rgb(223, 212, 97);
  color: #fff;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  border-top-right-radius: 120px;
  padding: 30px 20px;
  margin-bottom: 17px;
  position: relative;
  cursor: pointer;
  & > h1 {
    font-family: 'FreightSans Pro';
    font-weight: 700;
    margin: 0;
  }
`

const Answer = styled.div`
  max-height: ${props => (props.isShowing ? '500px' : 0)};
  overflow: hidden;
  background-color: #f7f7f7;
  margin-bottom: 17px;
  padding: ${props => (props.isShowing ? '20px 30px' : '0 30px')};
  transition: all 0.25s;
  & > p {
    text-align: left !important;
  }
`

const Elipses = styled.h1`
  position: absolute;
  bottom: 10px;
  right: 20px;
  font-size: 60px;
`

const FaqDropdown = ({ children, header }) => {
  const [isShowing, setIsShowing] = React.useState(false)

  const thisDropdown = React.useRef()

  React.useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const handleClick = e => {
    if (
      e.target === thisDropdown.current ||
      e.target.contains(thisDropdown.current)
    )
      return

    let targetIsInDropdown = false

    const dropdowns = document.querySelectorAll('.faq-dropdown')
    for (let i = 0; i < dropdowns.length; i++) {
      if (
        dropdowns[i].contains(e.target) &&
        !dropdowns[i].contains(thisDropdown.current)
      )
        targetIsInDropdown = true
    }

    if (
      (e.target.classList.length &&
        e.target.classList.contains('faq-dropdown')) ||
      targetIsInDropdown
    ) {
      setIsShowing(false)
      console.log('close dropdown')
    }
  }

  return (
    <>
      <Question
        onClick={() => setIsShowing(!isShowing)}
        className="faq-dropdown"
        ref={thisDropdown}
      >
        <h1>{header}</h1>
        <Elipses>...</Elipses>
      </Question>
      <Answer isShowing={isShowing}>{children}</Answer>
    </>
  )
}

export default FaqDropdown