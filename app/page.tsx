'use client'

import React, { Suspense } from 'react'
import Image from 'next/image'

import { FiltersContextProvider } from '@/contexts/filters'

import { Container, StyledFilters, Logo, IconWrapper, StyledTickets } from './styles'

const Home = () => {
  return (
    <Suspense>
      <FiltersContextProvider>
        <Logo>
          <IconWrapper>
            <Image src="/airliner.svg" width="26" height="26" alt="Airliner Icon" />
          </IconWrapper>
        </Logo>
        <Container>
          <StyledFilters />
          <StyledTickets />
        </Container>
      </FiltersContextProvider>
    </Suspense>
  )
}

export default Home
