import React, { useContext, useCallback, useMemo } from 'react'

import FiltersContext from '@/contexts/filters'
import { CurrencyType, Filter } from '@/models/Filter'

import Transfers from './transfers'
import { Container, Label, StyledCurrency } from './styles'

export type FiltersProps = {
  className?: string
}

const Filters: React.FC<FiltersProps> = ({ className = '' }) => {
  const { filters, changeFilters, transformFiltersToHash, transformHashToFilters } = useContext(FiltersContext)

  const changeFilter = useCallback(({ label, value }: Filter) => {
    const hash = transformFiltersToHash(filters)
    if (label === 'currency') {
      hash[label] = value as CurrencyType
    } else {
      hash[label] = value
    }
    const newFilters = transformHashToFilters(hash)

    changeFilters(newFilters)
  }, [filters, changeFilters, transformFiltersToHash, transformHashToFilters])

  const handleCurrencyChange = useCallback((currency: CurrencyType) => {
    changeFilter({ label: 'currency', value: currency })
  }, [changeFilter])

  const handleTransfersChange = useCallback((transfers: string[]) => {
    changeFilter({ label: 'transfers', value: transfers.join('|') })
  }, [changeFilter])

  const defaultCurrencyValue = useMemo(() => {
    const currencyFilter = filters.find(({ label }) => label === 'currency')

    return currencyFilter ? currencyFilter.value : ''
  }, [filters])

  const defaultTransfersValue = useMemo(() => {
    const transfersFilter = filters.find(({ label }) => label === 'transfers')

    return transfersFilter ? transfersFilter.value.split('|') : []
  }, [filters])

  return (
    <Container className={className}>
      <Label>Валюта</Label>
      <StyledCurrency defaultValue={defaultCurrencyValue} onChange={handleCurrencyChange} />

      <Label>Количество пересадок</Label>
      <Transfers defaultValue={defaultTransfersValue} onChange={handleTransfersChange} />
    </Container>
  )
}

export default Filters