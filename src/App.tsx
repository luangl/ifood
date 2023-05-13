import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import MyRoutes from './routes'

import { GlobalStyle } from './styles'

import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <MyRoutes />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
