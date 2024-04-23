import React, { memo } from 'react'

import { Container, OriginalInput, FakeInput } from './styles'

type RadioProps = {
  label?: string
  name: string
  value: string
  checked: boolean
  onChange: () => void
}

const Radio: React.FC<RadioProps> = ({ label = '', name, value, checked, onChange }) => {
  return (
    <Container>
      <OriginalInput
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      {!!label && <FakeInput>{label}</FakeInput>}
    </Container>
  )
}

export default memo(Radio)
