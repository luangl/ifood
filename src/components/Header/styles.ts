import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const SubTitulo = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: ${colors.salmon};
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 22px;
  }
`

export const Logo = styled.img`
  margin-bottom: 138px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 80px;
  }
`
