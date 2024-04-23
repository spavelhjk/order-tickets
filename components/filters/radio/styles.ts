import styled from 'styled-components'

import { colors } from '@/theme'

export const FakeInput = styled.span`
  display: inline-block;
  width: 33.3%;
  max-width: 80px;
  padding: 12px;
  background-color: ${colors.bgSecondary};
  border: 1px solid ${colors.primary};
  text-align: center;
  text-transform: uppercase;
  color: ${colors.primary};
  cursor: pointer;
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: ${colors.fifth};
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
    box-shadow: ${colors.primary} 0px 0px 10px;
  }
  &:checked + ${FakeInput} {
    pointer-events: none;
    border-color: ${colors.primary};
    background-color: ${colors.primary};
    color: white;
  }
`

export const Container = styled.label`
  &:first-of-type {
    ${FakeInput} {
      border-right: ${colors.bgSecondary};
      border-radius: 8px 0 0 8px;
    }
  }

  &:last-of-type {
    ${FakeInput} {
      border-left: ${colors.bgSecondary};
      border-radius: 0 8px 8px 0;
    }
  }
`
