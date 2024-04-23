import styled from 'styled-components'

const Card = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 8px;
  background-color: ${props => props.theme.bgSecondary};
`

export default Card
