import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Texto,
  CartItem,
  Inputs,
  Botao
} from './styles'
import sushi from '../../assets/images/food/sushi.png'
import pizza from '../../assets/images/food/pizza.png'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useDispatch } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { useState } from 'react'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getTotalPrice = (items: any[]) => {
    return items.reduce((total, item) => {
      return total + item.price
    }, 0)
  }

  const removeItem = (index: number) => {
    dispatch(remove(index))
  }

  const [showInputs, setShowInputs] = useState(false)
  const [showContent, setShowContent] = useState(true)
  const [showPaymentInputs, setShowPaymentInputs] = useState(false)

  const handleContinueDelivery = () => {
    setShowContent(false)
    setShowInputs(true)
  }

  const handleContinuePayment = () => {
    setShowInputs(false)
    setShowPaymentInputs(true)
  }

  const handleGoBack = () => {
    setShowContent(true)
    setShowInputs(false)
    setShowPaymentInputs(false)
  }

  const handleGoOneBack = () => {
    setShowContent(false)
    setShowInputs(true)
    setShowPaymentInputs(false)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {showPaymentInputs ? (
          <div>
            <h3 className="pagamento">
              Pagamento - Valor a pagar R${' '}
              {getTotalPrice(items.map((item) => ({ ...item, price: 60.9 })))
                .toFixed(2)
                .replace('.', ',')}{' '}
            </h3>
            <h4>Nome no cartão</h4>
            <input type="text" placeholder="" />
            <Inputs>
              <div>
                <h4>Número do cartão</h4>
                <input id="numerocartao" type="number" placeholder="" />
              </div>

              <div>
                <h4>CVV</h4>
                <input type="number" placeholder="" />
              </div>
            </Inputs>
            <Inputs>
              <div>
                <h4>Mês de vencimento</h4>
                <input type="number" placeholder="" />
              </div>

              <div>
                <h4>Ano de vencimento</h4>
                <input type="number" placeholder="" />
              </div>
            </Inputs>
            <Botao>
              <button>Finalizar pagamento</button>
              <button onClick={handleGoOneBack}>
                Voltar para a edição de endereço
              </button>
            </Botao>
          </div>
        ) : showInputs ? (
          <div>
            <h3 className="entrega">Entrega</h3>
            <h4>Quem irá receber</h4>
            <input type="text" placeholder="" />
            <h4>Endereço</h4>
            <input type="text" placeholder="" />
            <h4>Cidade</h4>
            <input type="text" placeholder="" />
            <Inputs>
              <div>
                <h4>CEP</h4>
                <input type="number" placeholder="" />
              </div>
              <div>
                <h4>Número</h4>
                <input type="number" placeholder="" />
              </div>
            </Inputs>
            <h4>Complemento (opcional)</h4>
            <input type="text" placeholder="" />
            <Botao>
              <button onClick={handleContinuePayment}>
                Continuar com o pagamento
              </button>
              <button onClick={handleGoBack}>Voltar para o carrinho</button>
            </Botao>
          </div>
        ) : showContent ? (
          <>
            <ul>
              {items.map((item, index) => (
                <CartItem key={index}>
                  <img src={pizza} />
                  <div>
                    <h3>Pizza Marguerita</h3>
                    <span>R$ 60,90</span>
                  </div>
                  <button onClick={() => removeItem(index)} type="button" />
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
            <button onClick={handleContinueDelivery}>
              Continuar com a entrega
            </button>
          </>
        ) : null}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
