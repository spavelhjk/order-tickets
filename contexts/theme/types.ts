import React from 'react'

export type Theme = 'light' | 'dark'

type ColorNames = 'primary' |
  'secondary' |
  'thertiary' |
  'fourthiary' |
  'fifth' |
  'bgPrimary' |
  'bgSecondary' |
  'bgThertiary' |
  'bgSwitchTheme'

export type Colors = { [colorName in ColorNames]: string }

export interface ThemeContextProps {
    theme: Theme
    setTheme: React.Dispatch<React.SetStateAction<Theme>>
    colors: Colors
}
