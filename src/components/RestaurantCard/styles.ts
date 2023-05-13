import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.salmon};
  margin-bottom: 48px;
`

export const Description = styled.div`
  padding: 8px;
  color: ${colors.salmon};
  font-weight: bold;
  font-size: 14px;
`

export const CardTitle = styled.h3`
  font-size: 18px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 19px;
  }
`

export const CardRating = styled.div`
  display: flex;

  span {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 19px;
  }
`

export const CardButton = styled(Link)`
  background-color: ${colors.salmon};
  color: ${colors.darkBg};
  padding: 4px 6px;
  text-decoration: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 35px;
  }
`

export const About = styled.p`
  font-weight: normal;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 16px;
  }
`

export const CardImg = styled.div`
  width: 472px;
  height: 218px;
  background-size: cover;
  position: relative;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    background-size: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    background-size: cover;
  }
`

export const CardInfoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
  padding-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 15px;
  }
`

export const CardInfo = styled.span`
  background-color: ${colors.salmon};
  color: ${colors.darkBg};
  padding: 6px 4px;
  margin-left: 8px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 15px;
    align-items: center;
  }
`
