'use client'

import React, { Suspense } from 'react'
import Image from 'next/image'

import { FiltersContextProvider } from '@/contexts/filters'
import { ThemeContextProvider } from '@/contexts/theme'

import { Container, StyledFilters, Logo, IconWrapper, StyledTickets, StyledSwitchTheme } from './styles'
import GlobalStyle from './globalStyles'

const Home = () => {
  return (
    <Suspense>
      <ThemeContextProvider>
        <GlobalStyle />
        <FiltersContextProvider>
          <Logo>
            <IconWrapper>
              <Image src="/airliner.svg" width="26" height="26" alt="Airliner Icon" />
            </IconWrapper>
            <StyledSwitchTheme />
          </Logo>
          <Container>
            <StyledFilters />
            <StyledTickets />
          </Container>
        </FiltersContextProvider>
      </ThemeContextProvider>
    </Suspense>
  )
}

export default Home
