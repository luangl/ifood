import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Texto,
  CartItem,
  Inputs,
  Botao,
  Textofinal
} from './styles'
import sushi from '../../assets/images/food/sushi.png'
import pizza from '../../assets/images/food/pizza.png'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useDispatch } from 'react-redux'
import { close, remove, removeAll } from '../../store/reducers/cart'
import { useState } from 'react'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const handleRemoveAllItems = () => {
    dispatch(removeAll())
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
  const [showFinalizePayment, setShowFinalizePayment] = useState(false)

  const handleContinueDelivery = () => {
    setShowContent(false)
    setShowInputs(true)
  }

  const handleContinuePayment = () => {
    setShowInputs(false)
    setShowPaymentInputs(true)
  }

  const handleFinalizePayment = () => {
    setShowPaymentInputs(false)
    setShowFinalizePayment(true)
  }

  const handleGoBack = () => {
    setShowContent(true)
    setShowInputs(false)
    setShowPaymentInputs(false)
    setShowFinalizePayment(false)
  }

  const handleGoOneBack = () => {
    setShowContent(false)
    setShowInputs(true)
    setShowPaymentInputs(false)
    setShowFinalizePayment(false)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {showFinalizePayment ? (
          <div>
            <h3 className="pagamento">Pedido realizado - </h3>
            <Textofinal>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br></br>
              <br></br>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br></br>
              <br></br>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br></br>
              <br></br>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </Textofinal>
            <Botao>
              <button
                onClick={() => {
                  closeCart()
                  handleGoBack()
                  handleRemoveAllItems()
                }}
              >
                Concluir
              </button>
            </Botao>
          </div>
        ) : showPaymentInputs ? (
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
              <button onClick={handleFinalizePayment}>
                Continuar com o pagamento
              </button>
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
