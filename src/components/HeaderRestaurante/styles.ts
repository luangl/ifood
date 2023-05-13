import styled from 'styled-components'
import { Background, breakpoints, colors } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 140px;
  }
`

export const HeaderText = styled.p`
  color: ${colors.salmon};
  font-size: 18px;
  font-weight: 900;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 15px;
    margin-right: 15px;
    margin-left: -15px;
  }
`

export const Header = styled(Background)`
  height: 186px;
`
export const CartButton = styled.p`
  color: ${colors.salmon};
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 15px;
    margin-right: -35px;
  }
`
