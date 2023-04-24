import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  padding: 8px;
  position: relative;
  text-decoration: none;
  color: ${cores.branca};
  display: block;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  display: flex;
  text-align: center;
  justify-content: space-between;
  margin-left: 7px;
  margin-bottom: 8px;
  line-height: 21px;
  color: #e66767;
  margin-top: 8px;
  img {
    width: 20px;
    height: 20px;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 8, 5px;
  }
`
export const AvaText = styled.h3`
  font-weight: 700;
  font-size: 18px;
`

export const Descricao = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 20px;
`
export const Ava = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  color: #e66767;
`
