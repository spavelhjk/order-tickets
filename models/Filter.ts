export type CurrencyType = 'rub' | 'usd' | 'eur'
export type FilterLabel = 'currency' | 'transfers'

type BaseFilterType = {
  label: FilterLabel
  value: CurrencyType | string
}

interface CurrencyFilterType extends BaseFilterType {
  label: 'currency'
  value: CurrencyType
}

interface TransfersFilterType extends BaseFilterType {
  label: 'transfers'
  value: string
}

export type FilterType = CurrencyFilterType | TransfersFilterType

export type FiltersHashType = {
  transfers: string
  currency: CurrencyType
}
