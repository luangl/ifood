import styled from 'styled-components'
import { cores } from '../../styles'
import headerBackground from '../../assets/images/Vector.png'

export const HeaderBar = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 384px;
  width: 100%;
  background-image: url(${headerBackground});
  background-position: center;
  background-size: cover;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`
export const HeaderLogo = styled.img`
  height: 57.5px;
  width: 125px;
  margin-top: 40px;
  margin-bottom: 138.5px;
`

export const HeaderText = styled.span`
  width: 539px;
  height: 84px;
  margin-bottom: 40px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #e66767;
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const CartButton = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
