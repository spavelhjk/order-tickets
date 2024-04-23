import React, { useContext } from 'react'

import FiltersContext from '@/contexts/filters'
import { useTickets } from '@/hooks/api'

import NoData from './no-data'
import { Container, StyledTicket, StyledTicketSkeleton } from './styles'

type TicketsType = {
  className?: string
}

const Tickets: React.FC<TicketsType> = ({ className = '' }) => {
  const { filtersAsHash } = useContext(FiltersContext)
  const { tickets, loading } = useTickets({ requestParams: filtersAsHash })

  return (
    <Container className={className}>
      {loading && (
        <>
          <StyledTicketSkeleton />
          <StyledTicketSkeleton />
          <StyledTicketSkeleton />
          <StyledTicketSkeleton />
        </>
      )}
      {!loading && !tickets.length && <NoData />}
      {!loading && !!tickets.length && tickets.map(({ id, ...ticket }) => <StyledTicket key={id} {...ticket} currency={filtersAsHash.currency} />)}
    </Container>
  )
}

export default Tickets
