import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  salmon: '#E66767',
  bgColor: '#FFF8F2',
  white: '#fff',
  darkBg: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.bgColor};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
      width: 100%;
  }
`

export const Background = styled.div`
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding-top: 64px;
  padding-bottom: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 310px;
  }
`
