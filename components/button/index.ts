import { memo } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 18px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  text-align: center;
  box-shadow: transparent 0px 1px 4px;
  opacity: 1;
  background-color: ${props => props.theme.bgThertiary};
  color: white;
  cursor: pointer;
  transition: 0.4s ease-in-out;

  &:focus,
  &:hover {
    opacity: 0.9;
    box-shadow: ${props => props.theme.bgThertiary} 0px 0px 10px;
    outline: none;
  }
`

export default memo(Button)
