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
import pizza from '../../assets/images/food/pizza.png'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useDispatch } from 'react-redux'
import { close, remove, removeAll } from '../../store/reducers/cart'
import { useState, useEffect } from 'react'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import _ from 'lodash'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [orderId, setOrderId] = useState('')

  useEffect(() => {
    const fetchOrderId = async () => {
      try {
        const response = await fetch(
          'https://fake-api-tau.vercel.app/api/efood/checkout',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              products: [
                {
                  id: 'number',
                  price: 'number'
                }
              ],
              delivery: {
                receiver: formik.values.receiver,
                address: {
                  description: formik.values.address,
                  city: formik.values.city,
                  zipCode: formik.values.zipCode,
                  number: formik.values.number,
                  complement: 'string'
                }
              },
              payment: {
                card: {
                  name: formik.values.cardName,
                  number: formik.values.cardNumber,
                  code: formik.values.cardCvv,
                  expires: {
                    month: formik.values.cardExpirationMonth,
                    year: formik.values.cardExpirationYear
                  }
                }
              }
            })
          }
        )

        const data = await response.json()

        // Assuming the API response contains an `orderId` field
        const { orderId } = data

        setOrderId(orderId)
      } catch (error) {
        console.error('Error fetching order ID:', error)
      }
    }

    fetchOrderId()
  }, [])
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

  const validationSchema = Yup.object().shape({
    cardName: Yup.string().required('O campo Nome no cartão é obrigatório'),
    cardNumber: Yup.string()
      .required('O campo Número do cartão é obrigatório')
      .matches(/\d{4} \d{4} \d{4} \d{4}/, 'Formato inválido'),
    cardCvv: Yup.string()
      .required('CVV é obrigatório')
      .matches(/\d{3}/, 'Formato inválido'),
    cardExpirationMonth: Yup.string()
      .required('O campo Mês de vencimento é obrigatório')
      .matches(/0[1-9]|1[0-2]/, 'Mês inválido'),
    cardExpirationYear: Yup.string()
      .required('O campo Ano de vencimento é obrigatório')
      .matches(/\d{4}/, 'Ano inválido'),
    receiver: Yup.string()
      .required('O campo Quem irá receber é obrigatório')
      .min(3, 'Mínimo de 3 letras'),
    address: Yup.string().required('O campo Endereço é obrigatório'),
    city: Yup.string().required('O campo Cidade é obrigatório'),
    zipCode: Yup.string()
      .required('O campo CEP é obrigatório')
      .min(7, '8 números'),
    number: Yup.number()
      .typeError('O campo Número deve ser um número')
      .required('O campo Número é obrigatório')
  })

  const formik = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cardCvv: '',
      cardExpirationMonth: '',
      cardExpirationYear: '',
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // lógica para enviar os dados do formulário
    }
  })

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length < 1 ? ( // Condição para verificar se não há itens no carrinho
          <div>
            <h2>Carrinho vazio</h2>
            <h4>Adicione itens ao seu carrinho para continuar.</h4>
          </div>
        ) : showFinalizePayment ? (
          <div>
            <h3 className="pagamento">Pedido realizado - {orderId}</h3>
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
            <input
              type="text"
              name="cardName"
              onChange={(e) => {
                const onlyLetters = /^[A-Za-z\s]+$/
                if (e.target.value.match(onlyLetters)) {
                  formik.handleChange(e)
                }
              }}
              onBlur={formik.handleBlur}
              value={formik.values.cardName}
            />
            {formik.touched.cardName && formik.errors.cardName && (
              <div className="error-message">{formik.errors.cardName}</div>
            )}
            <Inputs>
              <div>
                <h4>Número do cartão</h4>
                <InputMask
                  id="numerocartao"
                  mask="9999 9999 9999 9999"
                  name="cardNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cardNumber}
                />
                {formik.touched.cardNumber && formik.errors.cardNumber && (
                  <div className="error-message">
                    {formik.errors.cardNumber}
                  </div>
                )}
              </div>

              <div>
                <h4>CVV</h4>
                <InputMask
                  mask="999"
                  name="cardCvv"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cardCvv}
                />
                {formik.touched.cardCvv && formik.errors.cardCvv && (
                  <div className="error-message">{formik.errors.cardCvv}</div>
                )}
              </div>
            </Inputs>
            <Inputs>
              <div>
                <h4>Mês de vencimento</h4>
                <InputMask
                  name="cardExpirationMonth"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cardExpirationMonth}
                  mask="99"
                />
                {formik.touched.cardExpirationMonth &&
                  formik.errors.cardExpirationMonth && (
                    <div className="error-message">
                      {formik.errors.cardExpirationMonth}
                    </div>
                  )}
              </div>

              <div>
                <h4>Ano de vencimento</h4>
                <InputMask
                  type="text"
                  name="cardExpirationYear"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cardExpirationYear}
                  mask="9999"
                />
                {formik.touched.cardExpirationYear &&
                  formik.errors.cardExpirationYear && (
                    <div className="error-message">
                      {formik.errors.cardExpirationYear}
                    </div>
                  )}
              </div>
            </Inputs>
            <Botao>
              <button
                onClick={handleFinalizePayment}
                disabled={
                  _.isEmpty(formik.values.cardName) ||
                  _.isEmpty(formik.values.cardCvv) ||
                  _.isEmpty(formik.values.cardExpirationMonth) ||
                  _.isEmpty(formik.values.cardExpirationYear)
                }
              >
                Finalizar o pagamento
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
            <input
              type="text"
              name="receiver"
              onChange={(e) => {
                const onlyLetters = /^[A-Za-z\s]+$/
                if (e.target.value.match(onlyLetters)) {
                  formik.handleChange(e)
                }
              }}
              onBlur={formik.handleBlur}
              value={formik.values.receiver}
            />
            {formik.touched.receiver && formik.errors.receiver && (
              <div className="error-message">{formik.errors.receiver}</div>
            )}
            <h4>Endereço</h4>
            <input
              type="text"
              name="address"
              onChange={(e) => {
                const onlyLetters = /^[A-Za-z\s]+$/
                if (e.target.value.match(onlyLetters)) {
                  formik.handleChange(e)
                }
              }}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address && (
              <div className="error-message">{formik.errors.address}</div>
            )}
            <h4>Cidade</h4>
            <input
              type="text"
              name="city"
              onChange={(e) => {
                const onlyLetters = /^[A-Za-z\s]+$/
                if (e.target.value.match(onlyLetters)) {
                  formik.handleChange(e)
                }
              }}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
            {formik.touched.city && formik.errors.city && (
              <div className="error-message">{formik.errors.city}</div>
            )}
            <Inputs>
              <div>
                <h4>CEP</h4>
                <InputMask
                  mask="99999-999"
                  maskChar=""
                  name="zipCode"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.zipCode}
                />
                {formik.touched.zipCode && formik.errors.zipCode && (
                  <div className="error-message">{formik.errors.zipCode}</div>
                )}
              </div>
              <div>
                <h4>Número</h4>
                <input
                  type="text"
                  name="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.number}
                  required
                />
                {formik.touched.number && formik.errors.number && (
                  <div className="error-message">{formik.errors.number}</div>
                )}
              </div>
            </Inputs>
            <h4>Complemento (opcional)</h4>
            <input name="complement" type="text" placeholder="" />
            <Botao>
              <button
                onClick={handleContinuePayment}
                disabled={
                  _.isEmpty(formik.values.receiver) ||
                  _.isEmpty(formik.values.address) ||
                  _.isEmpty(formik.values.city) ||
                  _.isEmpty(formik.values.zipCode) ||
                  _.isEmpty(formik.values.number)
                }
              >
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
