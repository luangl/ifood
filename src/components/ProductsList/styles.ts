import styled from 'styled-components'

import { Props } from '.'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: #f5f5f5;

  ${Card} {
    background-color: #fff;
    color: #e66767;
    border-width: 1px;
    border-style: solid;
    border-color: #e66767;
    padding: 0px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-top: 40px;
  margin-left: 171px;
  margin-right: 171px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-right: 8px;
    max-width: 32px;
    max-height: 32px;
  }
`
