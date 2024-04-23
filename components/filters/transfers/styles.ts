import styled from 'styled-components'

import { colors } from '@/theme'
import Checkbox from '../checkbox'

export const StyledCheckbox = styled(Checkbox)`
  padding: 8px 18px;
  width: 100%;
  background-color: transparent;
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: ${colors.fifth};
  }
`

export const Container = styled.div`
  padding-bottom: 18px;
`

export const OnlyButton = styled.button`
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%) scale(0);
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  color: ${colors.primary};
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.4s ease-in-out;

  &:focus {
    outline: none;
    text-shadow: text-shadow: 2px 2px 4px ${colors.primary};
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }

  &:hover + ${StyledCheckbox} {
    background-color: ${colors.fifth};
  }
`

export const CheckboxWrapper = styled.div`
  position: relative;

  &:hover {
    ${OnlyButton} {
      opacity: 1;
      transform: translateY(-50%) scale(1);
    }
  }
`
