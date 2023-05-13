import { Header, HeaderContainer, HeaderText, CartButton } from './styles'

import headerBg from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const HeaderRestaurante = () => {
  const dispatch = useDispatch()

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
        <CartButton onClick={openCart}>0 produto(s) no carrinho</CartButton>
      </HeaderContainer>
    </Header>
  )
}

export default HeaderRestaurante
