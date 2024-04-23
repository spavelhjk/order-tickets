import { useEffect, useState, useMemo } from 'react'
import axios from 'axios'

import { debounce } from '@/utils'
import { TicketType } from '@/models/Ticket'

const useTickets = ({ requestParams }: { requestParams?: object } = {}) => {
  const [tickets, setTickets] = useState<TicketType[]>([])
  const [error, setError] = useState<Error>()
  const [loading, setLoading] = useState(false)

  const getTickets = useMemo(() => debounce(
    async (requestParams: object | undefined) => {
      setLoading(true)

      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}api/tickets`, { params: requestParams })
        setTickets(data)
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)))
      }

      setLoading(false)
    },
    200
  ), [])

  useEffect(() => {
    getTickets(requestParams)
  }, [getTickets, requestParams])

  return {
    tickets,
    loading,
    error: error || null,
    getTickets,
  }
}

export default useTickets
