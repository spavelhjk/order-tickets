import styled from 'styled-components'

import { colors } from '@/theme'

import Card from '../card'
import Currency from './currency'

export const Container = styled(Card)`
  padding-top: 18px;
`

export const Label = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  padding: 0 18px;
  font-size: 1.1rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.secondary};
`

export const StyledCurrency = styled(Currency)`
  padding: 0 18px;
  margin-bottom: 1.5rem;
`
