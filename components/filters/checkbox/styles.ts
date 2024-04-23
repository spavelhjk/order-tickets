import styled from 'styled-components'

export const FakeInput = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 1px solid lightgray;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
`

export const OriginalInput = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  outline: none;
  clip: rect(0 0 0 0);

  &:focus + ${FakeInput} {
    box-shadow: ${props => props.theme.primary} 0px 0px 4px;
  }

  &:checked + ${FakeInput} {
    border-color: ${props => props.theme.primary};
    background: url('/check.svg') 50% 50% no-repeat;
    background-size: 14px;
  }
`

export const Text = styled.span`
  display: inline-block;
  position: relative;
  top: -6px;
  margin-left: 8px;
  user-select: none;
`

export const Container = styled.label`
  display: block;
  line-height: 0;
  cursor: pointer;
`
