import styled, { css } from 'styled-components'
import Image from 'next/image'

import { colors, sizes } from '@/theme'

import Button from '@/components/button'
import Card from '@/components/card'

export const Container = styled(Card)``

const Block = styled.div`
  display: inline-block;
  padding: 18px 28px;
  width: 30%;
  text-align: left;
  vertical-align: top;

  @media (max-width: ${sizes.laptop}px) {
    display: block;
    width: 100%;
  }
`

export const StyledButton = styled(Button)`
  display: block;
  margin-bottom: 12px;
  width: 100%;
`

export const Logo = styled(Image)`
  margin-bottom: 6px;
  width: 100%;
  height: auto;
`

export const OrderBlock = styled(Block)`
  border-right: 1px solid #d3d5d6;

  @media (max-width: ${sizes.laptop}px) {
    border-right: none;

    ${Logo},
    ${StyledButton} {
      max-width: 260px;
    }
  }
`

export const InfoBlock = styled(Block)`
  position: relative;
  width: 70%;

  @media (max-width: ${sizes.laptop}px) {
    display: block;
    width: 100%;
  }
`

export const Destination = styled.div<{ position?: 'left' | 'right' }>`
  display: inline-block;
  padding-top: 8px;
  width: 50%;
  vertical-align: top;
  color: ${colors.secondary};

  ${({ position }) => position === 'right' && css`
    text-align: right;
  `}
`

export const Time = styled.p`
  margin-bottom: 8px;
  font-size: 2rem;
`

export const Location = styled.p`
  margin-bottom: 4px;
  font-size: 0.93rem;
`

export const Date = styled.p`
  font-size: 0.81rem;
  color: #aab0b3;
`

export const TransfersWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 32px;
  right: 32%;
  left: 28%;

  @media (max-width: ${sizes.mobileL}px) {
    left: 35%;
    right: 37%;
  }
`

export const AirplaneIconWrapper = styled.div`
  width: 100%;
`

export const Transfers = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  color: #d3d5d6;
`

export const AirplaneIcon = styled.img.attrs({ src: '/airplane.svg' })`
  width: 28px;
  height: 28px;
  vertical-align: middle;
`

export const Line = styled.hr`
  display: inline-block;
  margin-right: -28px;
  width: 100%;
  vertical-align: middle;
  color: #d3d5d6;
`
