import styled from 'styled-components'

import { Props } from '.'
import { Card } from '../Product Perfil/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 56px 0px 120px;
  background-color: #fff8f2;

  ${Card} {
    background-color: #e66767;
    color: #ffebd9;
    border-width: 1px;
    border-style: solid;
    border-color: #e66767;
    padding: 0px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ffebd9;

  img {
    margin-right: 8px;
    max-width: 32px;
    max-height: 32px;
  }
`
