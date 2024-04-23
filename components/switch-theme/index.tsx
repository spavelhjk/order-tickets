import React, { useContext } from 'react'
import Image from 'next/image'

import ThemeContext from '@/contexts/theme'

import { Container } from './styles'

type SwitchThemeProps = {
  className?: string
}

const SwitchTheme: React.FC<SwitchThemeProps> = ({ className = '' }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <Container className={className} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <Image
        src={`/${theme === 'light' ? 'sun' : 'moon'}.svg`}
        width="30"
        height="30"
        alt="switch theme"
      />  
    </Container>
  )
}

export default SwitchTheme
