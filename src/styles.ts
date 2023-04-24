import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eee',
  preta: '#111',
  cinza: '#333',
  verde: '#E66767',
  cinzaClaro: '#A3A3A3'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color:  #F5F5F5;
    color: #F5F5F5;
    padding-top: 40px;
  }

  .container {
    width: 100%;
    margin: 0 auto;
  }
`
