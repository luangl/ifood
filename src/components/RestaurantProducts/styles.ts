import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${colors.salmon};
  margin-bottom: 32px;
  color: ${colors.darkBg};
  font-size: 14px;
  margin-top: 20px;
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

  @media (max-width: ${breakpoints.tabletmini}) {
    font-size: 20px;
  }
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

    @media (max-width: ${breakpoints.desktop}) {
      height: 600px;
      width: 100%;
    }

    @media (max-width: ${breakpoints.tabletmini}) {
      height: 670px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      height: 620px;
      width: 100%;
      display: grid;
    }

    h3 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 21px;
      margin-top: 32px;
      margin-bottom: 16px;

      @media (max-width: ${breakpoints.desktop}) {
        font-size: 30px;
      }

      @media (max-width: ${breakpoints.tablet}) {
        font-size: 25px;
        margin-left: 4px;
        margin-bottom: 10px;
        margin-top: 9px;
      }
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

      @media (max-width: ${breakpoints.desktop}) {
        width: 100%;
        height: 40px;
        font-size: 18px;
      }

      @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        height: 35px;
        font-size: 16px;
      }
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;

      @media (max-width: ${breakpoints.desktop}) {
        display: flex;
        font-size: 20px;
        flex-wrap: wrap;
        line-height: 30px;
      }

      @media (max-width: ${breakpoints.tablet}) {
        font-size: 14px;
        margin-left: 5px;
        font-weight: bold;
        line-height: 23px;
      }
    }

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
      object-position: center;
      margin-top: 32px;
      margin-right: 24px;
      margin-left: 32px;

      @media (max-width: ${breakpoints.desktop}) {
        margin-top: 135px;
      }

      @media (max-width: ${breakpoints.tablet}) {
        height: 200px;
        width: 350px;
        margin-top: 16px;
      }
    }
    .close {
      height: 16px;
      width: 16px;
      margin-top: 8px;
      margin-left: 0px;
      margin-right: 8px;
      cursor: pointer;

      @media (max-width: ${breakpoints.desktop}) {
        height: 30px;
        width: 30px;
      }

      @media (max-width: ${breakpoints.tabletmini}) {
        height: 20px;
      }

      @media (max-width: ${breakpoints.tablet}) {
        max-height: 400px;
        max-width: 100%;
        height: 20px;
        width: 20px;
        margin-top: -600px;
        margin-left: 387px;
        margin-right: 8px;
      }
    }

  }

  }
`

export const CardContent = styled.div`
  margin: 8px;

  img {
    border-radius: 10px;

    @media (max-width: ${breakpoints.tabletmini}) {
      width: 100%;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  }
`

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  padding-top: 8px;

  @media (max-width: ${breakpoints.tabletmini}) {
    font-size: 30px;
  }
`

export const CardDescription = styled.p`
  font-weight: 400;
  line-height: 22px;
  padding-top: 8px;
  padding-bottom: 8px;

  @media (max-width: ${breakpoints.tabletmini}) {
    font-size: 20px;
  }
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
