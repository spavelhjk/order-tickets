import { NextApiRequest, NextApiResponse } from 'next'
import moment from 'moment'

import ticketsData from '@/mock/tickets.json'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req

  let result = ticketsData

  if (query.transfers) {
    const transfers = (query.transfers as string).split('|').filter(Boolean)
    result = result.filter((ticket) => transfers.some(amount => Number(amount) === ticket.transfers))
  }

  res.status(200).json(
    result.map(({ from, to, ...ticket }) => ({
      ...ticket,
      from: { ...from, date: moment(from.date, 'YYYY-MM-DD').toDate() },
      to: { ...to, date: moment(to.date, 'YYYY-MM-DD').toDate() },
    }))
  )
}

export default handler
