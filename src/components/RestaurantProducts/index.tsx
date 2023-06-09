import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardTitle } from './styles'

import close from '../../assets/images/food/card/close.png'

import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import Home from '../../pages/Home'

type Props = {
  img: string
  title: string
  description: string
  path: string
  popupDescription: string
  popupDescriptionserving: string
}

const RestaurantProducts = ({
  description,
  img,
  title,
  popupDescription,
  popupDescriptionserving
}: Props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handlePathClick = () => {
    setIsPopupOpen(true)
  }

  const handlePopupClick = () => {
    setIsPopupOpen(false)
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(Home))
    dispatch(open())
  }

  return (
    <Card>
      <CardContent>
        <img src={img} alt={title} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <Card className="click" onClick={handlePathClick}>
          Mais Detalhes
        </Card>
      </CardContent>
      {isPopupOpen && (
        <div className="popup" onClick={handlePopupClick}>
          <div className="tudo">
            <img src={img} alt="" />
            <div className="itens">
              <h3>{title}</h3>
              <p>{popupDescription}</p>
              <div className="separar"></div>
              <p>{popupDescriptionserving}</p>
              <button onClick={addToCart}>
                Adicionar ao carrinho - R$ 60,90
              </button>
            </div>
            <img className="close" src={close}></img>
          </div>
        </div>
      )}
    </Card>
  )
}

export default RestaurantProducts
