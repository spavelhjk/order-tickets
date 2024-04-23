import { createGlobalStyle } from 'styled-components'

import { sizes } from '@/theme'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    font-size: 16px;
    background-color: ${props => props.theme.bgPrimary};
    color: ${props => props.theme.secondary};

    @media (max-width: ${sizes.mobileL}px) {
      font-size: 14px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    background-color: transparent;
  }
`

export default GlobalStyle
