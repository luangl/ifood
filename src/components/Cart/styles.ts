import styled from 'styled-components'

import fechar from '../../assets/images/food/cart/lixeira.png'
import { breakpoints } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Textofinal = styled.p`
  width: 344px;
  height: 286px;
  left: 1014px;
  top: 67px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  color: #ffebd9;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 15px;
    display: contents;
  }
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 16px;

    color: #ffebd9;
  }

  h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 8px;
    margin-top: 8px;

    color: #ffebd9;
  }

  h2 {
    color: #eee;
    margin-bottom: 30px;
  }

  input {
    display: block;
    width: 100%;
    height: 32px;
    border: none;
    padding: 8px;

    background: #ffebd9;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    color: #4b4b4b;
  }

  @media (max-width: ${breakpoints.tablet}) {
    h3 {
      font-size: 15px;
    }
    h4 {
      font-size: 14px;
    }
  }
`
export const Sidebar = styled.aside`
  background-color: #e66767;
  z-index: 1;
  padding-top: 40px;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 360px;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 400px;
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 300px;
  }

  button {
    width: 100%;
    background-color: #ffebd9;
    color: #e66767;
    border: none;
    cursor: pointer;
    height: 28px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 20px;
      height: 33px;
    }
  }
`

export const Prices = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: #eee;
  margin-top: 32px;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 18px;
  }
`

export const Botao = styled.div`
  margin-top: 24px;

  button {
    height: 24px;
    margin-bottom: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    button {
      font-size: 15px;
    }
  }
`

export const Inputs = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 34px;

  #numerocartao {
    width: 228px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    #numerocartao {
      width: 100%;
    }
  }
`

export const Texto = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CartItem = styled.li`
  display: flex;
  background-color: #ffebd9;
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-left: 8px;
    margin-top: 8px;
    margin-bottom: 12px;
  }

  h3 {
    color: #e66767;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    margin-left: 8px;
    margin-top: 8px;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 20px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      margin-right: 5px;
    }
  }

  span {
    display: block;
    color: #e66767;
    font-weight: 400;
    font-size: 14px;
    margin-top: 16px;
    margin-left: 8px;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 18px;
    }
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;

    @media (max-width: ${breakpoints.desktop}) {
    }
  }
`
