import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const BannerBg = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 150px;
  width: 100%;
  font-size: 32px;
  color: ${colors.white};

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }
`

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const BannerTitle = styled.h2`
  font-weight: 900;
`

export const BannerSubTitle = styled.h3`
  font-weight: 100;
  padding-top: 24px;
  padding-bottom: 124px;
`
