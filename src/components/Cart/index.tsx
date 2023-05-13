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
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = (items: any[]) => {
    return items.reduce((total, item) => {
      return total + item.price
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item, index) => (
            <CartItem key={index}>
              <img src={pizza} />
              <div>
                <h3>Pizza Marguerita</h3>
                <span>R$ 60,90</span>
              </div>
              <button type="button" />
            </CartItem>
          ))}
        </ul>
        <Texto>
          <Prices>Valor Total:</Prices>
          <Prices>
            Total de R${' '}
            {getTotalPrice(items.map((item) => ({ ...item, price: 60.9 })))
              .toFixed(2)
              .replace('.', ',')}{' '}
          </Prices>
        </Texto>
        <button>Continuar com a entrega</button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart