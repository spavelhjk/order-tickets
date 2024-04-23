import React from 'react'
import moment from 'moment'

import { TicketType } from '@/models/Ticket'
import { CurrencyType } from '@/models/Filter'
import Card from '@/components/card'

import { OrderBlock, InfoBlock, StyledButton, Logo, Destination, Time, Location, Date, TransfersWrapper, AirplaneIcon, Line, AirplaneIconWrapper, Transfers } from './styles'

moment.locale('ru')

type TicketProps = Omit<TicketType, 'id'> & {
  currency: CurrencyType
  className?: string
}

const Ticket: React.FC<TicketProps> = ({ logo, from, to, price, transfers, currency, className = '' }) => {
  const priceByCurrency = price[currency]
  const transfersText = transfers === 0
    ? 'без пересадок'
    : transfers === 1 ? 'пересадка' : 'пересадки'

  return (
    <Card className={className}>
      <OrderBlock>
        <Logo src={logo} width="180" height="130" alt="Turkish Airlines" />
        <StyledButton>Купить за {priceByCurrency.value.toLocaleString('ru-RU')} {priceByCurrency.symbol}</StyledButton>
      </OrderBlock>


      <InfoBlock>
        <Destination>
          <Time>{moment(from.date).format('HH:MM')}</Time>
          <Location>{from.location}</Location>
          <Date>{moment(from.date).format('D MMM YYYY, dd')}</Date>
        </Destination>

        <TransfersWrapper>
          <Transfers>{transfers > 0 ? transfers : ''} {transfersText}</Transfers>

          <AirplaneIconWrapper>
            <Line />
            <AirplaneIcon />
          </AirplaneIconWrapper>
        </TransfersWrapper>

        <Destination position="right">
          <Time>{moment(to.date).format('HH:MM')}</Time>
          <Location>{from.location}</Location>
          <Date>{moment(from.date).format('D MMM YYYY, dd')}</Date>
        </Destination>
      </InfoBlock>
    </Card>
  )
}

export default Ticket
