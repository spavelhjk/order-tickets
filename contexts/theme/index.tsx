import React, { createContext } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import * as lightColors from './light'
import useTheme from './useTheme'
import { ThemeContextProps } from './types'

const defaultValue = {
  theme: 'light',
  colors: lightColors,
  setTheme: () => null,
} as unknown as ReturnType<typeof useTheme>

const ThemeContext = createContext<ThemeContextProps>(defaultValue);

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useTheme()

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={value.colors}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContext
