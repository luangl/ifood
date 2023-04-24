import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: #ffebd9;
  padding-bottom: 40px;
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  color: ${cores.cinza};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  img {
    width: 125px;
    margin-top: 40px;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-top: 32.5px;
  text-align: center;
  justify-content: center;
  margin-bottom: 80px;
}
`

export const Link = styled.a`
  color: ${cores.cinza};
  text-decoration: none;
  margin-right: 8px;
`
export const Copy = styled.p`
  color: #e66767;
  text-align: center;
  font-weight: 400;
  margin-top: 80px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
