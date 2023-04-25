import styled from 'styled-components'
import { cores } from '../../styles'

import headerBackground from '../../assets/images/Vector.png'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  height: 186px;
  width: 100%;
  background-image: url(${headerBackground});
  background-position: center;
  background-size: cover;

  a {
    color: #e66767;
    text-decoration: none;
    font-weight: bold;
  }

  div {
    width: 100%;
  }
`

export const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  img {
    height: 57.5px;
    width: 125px;
    margin-left: 380px;
    margin-right: 341px;
    margin-bottom: 40px;
    margin-top: 25px;
  }
`

export const LinkItem = styled.li`
  margin-right: 110px;
`

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
