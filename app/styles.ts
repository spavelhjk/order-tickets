import styled from 'styled-components'

import { sizes, colors } from '@/theme'
import { Filters, Tickets, SwitchTheme } from '@/components'

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 18px;
  width: 100%;
  max-width: ${sizes.desktop}px;
  text-align: center;
`

export const StyledFilters = styled(Filters)`
  display: inline-block;
  margin-right: 2%;
  width: 25%;
  text-align: left;
  vertical-align: top;

  @media (max-width: ${sizes.hdr}px) {
    margin: 0 0 2%;
    width: 100%;
  }
`

export const Logo = styled.div`
  margin: 40px auto;
  text-align: center;
`

export const IconWrapper = styled.div`
  display: inline-block;
  padding: 20px;
  border-radius: 50%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: ${colors.primary};
`

export const StyledTickets = styled(Tickets)`
  display: inline-block;
  width: 73%;
  vertical-align: top;

  @media (max-width: ${sizes.hdr}px) {
    width: 100%;
  }
`

export const StyledSwitchTheme = styled(SwitchTheme)`
  margin-left: 8px;
  vertical-align: baseline;
`
