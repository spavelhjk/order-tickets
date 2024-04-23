export type CurrencyType = 'rub' | 'usd' | 'eur'
export type FilterLabel = 'currency' | 'transfers'

type BaseFilter = {
  label: FilterLabel
  value: CurrencyType | string
}

interface CurrencyFilter extends BaseFilter {
  label: 'currency'
  value: CurrencyType
}

interface TransfersFilter extends BaseFilter {
  label: 'transfers'
  value: string
}

export type Filter = CurrencyFilter | TransfersFilter

export type FiltersHashType = {
  transfers: string
  currency: CurrencyType
}
