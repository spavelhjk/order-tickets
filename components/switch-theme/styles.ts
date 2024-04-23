import styled from 'styled-components'

export const Container = styled.button`
  padding: 16px;
  border-radius: 50%;
  text-align: center;
  background-color: ${props => props.theme.bgSwitchTheme};
  cursor: pointer;
`
