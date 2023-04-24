import { Imagem, Titulo, Precos } from './styles'

import bannerImg from '../../assets/images/banner.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Imagem
    style={{
      backgroundImage: `url(${bannerImg})`
    }}
  >
    <div className="container">
      <Precos>Italiana</Precos>
      <div>
        <Titulo>La Dolce Vita Trattoria</Titulo>
      </div>
    </div>
  </Imagem>
)

export default Banner
