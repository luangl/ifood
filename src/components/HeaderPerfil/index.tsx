import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkItem } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <div>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Restaurantes</Link>
          </LinkItem>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <LinkItem>
            <a href="#">0 produto(s) no carrinho</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
  </HeaderBar>
)

export default Header
