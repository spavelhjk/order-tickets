import React, { useCallback } from 'react'

import { Container, CheckboxWrapper, StyledCheckbox, OnlyButton } from './styles'

const TRANSFERS = ['0', '1', '2', '3']

type TransfersProps = {
  defaultValue?: string[]
  onChange: (value: string[]) => void
  className?: string
}

const Transfers: React.FC<TransfersProps> = ({ defaultValue = [], onChange, className = '' }) => {
  const handleToggleAll = useCallback(() => {
    onChange(defaultValue.length < TRANSFERS.length ? TRANSFERS : []) 
  }, [defaultValue, onChange])

  const handleChange = useCallback((transfers: string) => {
    if (defaultValue.includes(transfers)) {
      return onChange(defaultValue.filter(t => t !== transfers))
    }

    onChange([...defaultValue, transfers])
  }, [defaultValue, onChange])

  const handleOnlyChange = useCallback((transfers: string) => {
    onChange([transfers])
  }, [onChange])

  return (
    <Container className={className}>
      <div>
        <StyledCheckbox
          label="Все"
          name="transfers"
          checked={defaultValue.length === TRANSFERS.length}
          onChange={handleToggleAll}
        />
      </div>

      {TRANSFERS.map(transfers => (
        <CheckboxWrapper key={transfers}>
          <StyledCheckbox
            label={(transfers === '0' ? 'Без' : transfers) + ' пересадок'}
            name="transfers"
            checked={defaultValue.includes(transfers)}
            onChange={() => handleChange(transfers)}
          />
          <OnlyButton onClick={() => handleOnlyChange(transfers)}>Только</OnlyButton>
        </CheckboxWrapper>
      ))}
    </Container>
  )
}

export default Transfers
