import styled from 'styled-components'

import Card from '@/components/card'

export const Container = styled(Card)`
  padding: 18px;
  background-color: white;
`

export const Text = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.secondary};
`
