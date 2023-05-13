import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.darkBg};
  height: 298px;
  text-align: center;
  margin-top: 120px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 20px;
  }

  ul {
    display: flex;
    justify-content: center;

    li {
      padding-right: 8px;
    }
  }
`

export const SocialMedias = styled.ul`
  img {
    width: 25px;
  }
`

export const Logo = styled.img`
  margin-top: 40px;
  margin-bottom: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 120px;
  }
`

export const Description = styled.p`
  color: ${colors.salmon};
  font-size: 10px;
  width: 480px;
  margin: 80px auto;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 36px;
    font-size: 13px;
    width: 100%;
  }
`
