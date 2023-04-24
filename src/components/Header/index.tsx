import { Link } from 'react-router-dom'

import { HeaderBar, HeaderLogo, HeaderText } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <HeaderBar>
      <Link to="/">
        <HeaderLogo src={logo} alt="EPLAY" />
      </Link>
      <HeaderText>
        Viva experiências gastronômicas no conforto da sua casa
      </HeaderText>
    </HeaderBar>
  )
}

export default Header
