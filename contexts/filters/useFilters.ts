import { useCallback, useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'

import { Filter, FiltersHashType, CurrencyType } from '@/models/Filter'

const filtersHash: FiltersHashType = {
  currency: 'rub',
  transfers: '',
}

const useFilters = () => {
  const searchParams = useSearchParams()
  const [filters, setFilters] = useState<Filter[]>([
    { label: 'currency', value: filtersHash.currency }
  ])

  const transformHashToFilters = useCallback((hash: FiltersHashType) => {
    const filters: Filter[] = []

    for (const [label, value] of Object.entries(hash)) {
      if (label === 'currency') {
        filters.push({ label: 'currency', value: value as CurrencyType })
      } else {
        filters.push({ label: 'transfers', value })
      }
    }

    return filters
  }, [])

  const transformFiltersToHash = useCallback((filters: Filter[]) => {
    const hash: FiltersHashType = { ...filtersHash }

    for (const { label: l, value: v } of filters) {
      if (l === 'currency') {
        hash[l] = v
      } else {
        hash[l] = v
      }
    }

    return hash
  }, [])

  useEffect(() => {
    try {
      if (searchParams?.has('filter')) {
        const hash: FiltersHashType = JSON.parse(searchParams.get('filter') as string)
        const filtersFromSearchParams = transformHashToFilters(hash)

        setFilters(filtersFromSearchParams)
      }
    } catch (err) {
      console.log('Ошибка парсинга фильтров: ', err)
    }
  }, [searchParams, transformHashToFilters])

  const applyFilters = useCallback((filters: Filter[]) => {
    const searchParams = new URLSearchParams(window.location.search)

    const filtersHash = transformFiltersToHash(filters)
    if (filters.length) {
      searchParams.set('filter', JSON.stringify(filtersHash))
    } else {
      searchParams.delete('filter')
    }

    window.history.pushState({}, document.title, `?${searchParams.toString()}`)
  }, [transformFiltersToHash])

  const changeFilters = useCallback((filters: Filter[]) => {
    applyFilters(filters)
    setFilters(filters)
  }, [applyFilters])

  const filtersAsHash = useMemo(() => transformFiltersToHash(filters), [filters, transformFiltersToHash])

  return {
    filters,
    filtersAsHash,
    changeFilters,
    transformFiltersToHash,
    transformHashToFilters,
  }
}

export default useFilters
