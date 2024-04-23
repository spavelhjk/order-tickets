import { useState, useMemo } from 'react'

import lightColors from './light'
import darkColors from './dark'
import { Theme } from './types'

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('light')

  const colors = useMemo(() => theme === 'light' ? lightColors : darkColors, [theme])

  return {
    theme,
    colors,
    setTheme,
  }
}

export default useTheme
