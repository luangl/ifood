import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${colors.salmon};
  margin-bottom: 32px;
  color: ${colors.darkBg};
  font-size: 14px;
  margin-top: 56px;
  margin-bottom: 0px;
  border-radius: 10px;


  .click {
  color: ${colors.salmon};
  display: block;
  text-align: center;
  padding: 4px;
  text-decoration: none;
  font-weight: 700;
  background-color: ${colors.darkBg};
  cursor: pointer;
  margin-top: 8px;
  border-radius: 0px;
  }

  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .separar {
    margin-bottom: 30px;
  }
  .popup > img {
    width: 280px;
    height: 280px;
  }

  .popup > div > h3 {
    margin: 0;
  }

  .popup > div > p {
    margin: 0;
  }


  .tudo {
    width: 1024px;
    height: 344px;
    display: flex;
    flex-direction: initial;
    align-items: flex-start;
    background: #E66767;

    h3 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 21px;
      margin-top: 32px;
      margin-bottom: 16px;
    }

    button {
      background: #FFEBD9;
      border: none;
      margin-top 20px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: #E66767;
      padding-left: 6.95px;
      padding-right: 7.05px;
      padding-top: 4px;
      padding-bottom: 4px;
      cursor: pointer;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
    }

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
      object-position: center;
      margin-top: 32px;
      margin-right: 24px;
      margin-left: 32px;
    }
    .close {
      height: 16px;
      width: 16px;
      margin-top: 8px;
      margin-left: 0px;
      margin-right: 8px;
      cursor: pointer;
    }

  }

  }
`

export const CardContent = styled.div`
  margin: 8px;

  img {
    border-radius: 10px;
  }
`

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  padding-top: 8px;
`

export const CardDescription = styled.p`
  font-weight: 400;
  line-height: 22px;
  padding-top: 8px;
  padding-bottom: 8px;
`

export const CardLink = styled(Link)`
  background-color: ${colors.darkBg};
  color: ${colors.salmon};
  display: block;
  text-align: center;
  padding: 4px;
  text-decoration: none;
  font-weight: 700;
`
