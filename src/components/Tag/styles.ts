import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.verde};
  color: ${cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '14px')};
  font-weight: 700;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '6px 4px')};
  display: inline-block;
  margin-left: 8px;
  margin-bottom: 8px;
`
