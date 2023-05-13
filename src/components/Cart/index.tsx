import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Texto,
  CartItem
} from './styles'

import pizza from '../../assets/images/food/pizza.png'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useDispatch } from 'react-redux'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={pizza} />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={pizza} />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Texto>
          <Prices>Valor Total:</Prices>
          <Prices>Total de R$ 250,00</Prices>
        </Texto>
        <button>Continuar com a entrega</button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
