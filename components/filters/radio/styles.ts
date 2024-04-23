import styled from 'styled-components'

export const FakeInput = styled.span`
  display: inline-block;
  width: 33.3%;
  max-width: 80px;
  padding: 12px;
  background-color: ${props => props.theme.bgSecondary};
  border: 1px solid ${props => props.theme.primary};
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.primary};
  cursor: pointer;
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.fifth};
  }
`

export const OriginalInput = styled.input.attrs({
  type: 'radio',
})`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);

  &:focus + ${FakeInput} {
    box-shadow: ${props => props.theme.primary} 0px 0px 10px;
  }
  &:checked + ${FakeInput} {
    pointer-events: none;
    border-color: ${props => props.theme.primary};
    background-color: ${props => props.theme.primary};
    color: white;
  }
`

export const Container = styled.label`
  &:first-of-type {
    ${FakeInput} {
      border-right: ${props => props.theme.bgSecondary};
      border-radius: 8px 0 0 8px;
    }
  }

  &:last-of-type {
    ${FakeInput} {
      border-left: ${props => props.theme.bgSecondary};
      border-radius: 0 8px 8px 0;
    }
  }
`
