import { Header, HeaderContainer, HeaderText, CartButton } from './styles'

import headerBg from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderRestaurante = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <Header style={{ backgroundImage: `url(${headerBg})` }}>
      <HeaderContainer className="container">
        <HeaderText>Restaurantes</HeaderText>
        <a href="/">
          <img src={logo} alt="eFood" />
        </a>
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </HeaderContainer>
    </Header>
  )
}

export default HeaderRestaurante
