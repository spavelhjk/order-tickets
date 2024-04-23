import React from 'react'

import { Container, OriginalInput, FakeInput, Text } from './styles'

type CheckboxProps = {
  label?: string
  name: string
  checked?: boolean
  onChange: (checked?: boolean) => void
  className?: string
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name, checked = false, onChange, className = '' }) => {
  return (
    <Container className={className}>
      <OriginalInput name={name} checked={checked} onChange={() => onChange(!checked)} />
      <FakeInput />
      {!!label && <Text>{label}</Text>}
    </Container>
  )
}

export default Checkbox
