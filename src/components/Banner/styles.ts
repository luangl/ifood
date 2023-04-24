import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .container {
    position: relative;
    display: block;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 900;
  line-height: 38px;
  margin-left: 170px;
`

export const Precos = styled.p`
  font-size: 32px;
  font-style: normal;
  font-weight: 100;
  margin-bottom: 156.5px;
  margin-left: 101px;
  padding-top: 24px;
`
