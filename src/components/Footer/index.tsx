import {
  Container,
  Copy,
  FooterSection,
  Link,
  Links,
  SectionTitle
} from './styles'

import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/insta.png'
import face from '../../assets/images/face.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>
          <img src={logo} alt="" />
        </SectionTitle>
        <Links>
          <li>
            <Link>
              <img src={insta} alt="" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={face} alt="" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={twitter} alt="" />
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p className="copy">
        <Copy>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, <br /> qualidade dos produtos é toda do
          estabelecimento contratado.
        </Copy>
      </p>
    </div>
  </Container>
)

export default Footer
