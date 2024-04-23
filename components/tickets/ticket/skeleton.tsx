import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { colors } from '@/theme'

import {
  Container,
  OrderBlock,
  InfoBlock,
  Destination,
  Time,
  Location,
  Date,
  TransfersWrapper,
  Transfers,
} from './styles'

type TicketSkeletonType = {
  className?: string
}

const TicketSkeleton: React.FC<TicketSkeletonType> = ({ className = '' }) => {
  return (
    <Container className={className}>
      <SkeletonTheme baseColor="#edebeb" highlightColor={colors.fifth}>
        <OrderBlock>
          <Skeleton style={{ marginBottom: 18, width: '100%', height: 75 }} />
          <Skeleton style={{ width: '100%', height: 54 }} />
        </OrderBlock>

        <InfoBlock>
          <Destination>
            <Time>
              <Skeleton style={{ width: '55%', height: 39 }} />
            </Time>
            <Location>
              <Skeleton style={{ width: '65%', height: 18 }} />
            </Location>
            <Date>
              <Skeleton style={{ width: '45%', height: 16 }} />
            </Date>
          </Destination>

          <TransfersWrapper>
            <Transfers>
              <Skeleton style={{ width: '55%', height: 19 }} />
            </Transfers>
          </TransfersWrapper>

          <Destination position="right">
            <Time>
              <Skeleton style={{ width: '55%', height: 39 }} />
            </Time>
            <Location>
              <Skeleton style={{ width: '65%', height: 18 }} />
            </Location>
            <Date>
              <Skeleton style={{ width: '45%', height: 16 }} />
            </Date>
          </Destination>
        </InfoBlock>
      </SkeletonTheme>
    </Container>
  )
}

export default TicketSkeleton