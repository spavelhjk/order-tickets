import React from 'react'

import { CurrencyType } from '@/models/Filter'

import Radio from '../radio'

const CURRENCIES: CurrencyType[] = ['rub', 'usd', 'eur']

type CurrencyProps = {
  defaultValue?: string
  onChange: (currency: CurrencyType) => void
  className?: string
}

const Currency: React.FC<CurrencyProps> = ({ defaultValue, onChange, className = '' }) => {
  return (
    <div className={className}>
      {CURRENCIES.map(currency => (
        <Radio
          key={currency}
          label={currency}
          name="currency"
          value={currency}
          checked={defaultValue === currency}
          onChange={() => onChange(currency)}
        />
      ))}
    </div>
  )
}

export default Currency
