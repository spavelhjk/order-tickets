import styled from 'styled-components'

import Ticket from './ticket'
import TicketSkeleton from './ticket/skeleton'

export const Container = styled.div``

export const StyledTicket = styled(Ticket)`
  margin-bottom: 18px;
  text-align: left;
`

export const StyledTicketSkeleton = styled(TicketSkeleton)`
  margin-bottom: 18px;
`
