type Destination = {
  location: string
  date: Date
}

export type Price = {
  rub: {
    symbol: string
    value: number
  }
  usd: {
    symbol: string
    value: number
  }
  eur: {
    symbol: string
    value: number
  }
}

export type TicketType = {
  id: number
  logo: string
  from: Destination
  to: Destination
  price: Price
  transfers: number
}
