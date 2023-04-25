import Tag from '../Tag'
import estrela from '../../assets/images/estrela.png'

import { Card, Descricao, Titulo, Infos, Ava, AvaText, Teste } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
  titleava: string
}

const Product = ({
  title,
  category,
  description,
  infos,
  image,
  titleava
}: Props) => {
  return (
    <Teste>
      <div style={{ position: 'relative' }}>
        <img src={image} alt={title} />
        <Infos style={{ position: 'absolute', bottom: 0, right: 16 }}>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </Infos>
      </div>
      <Card to="/categories">
        <Titulo>
          {title}
          <Ava>
            <AvaText>{titleava}</AvaText>
            <img src={estrela} alt="" />
          </Ava>
        </Titulo>
        <Descricao>{description}</Descricao>
        <Tag>{category}</Tag>
      </Card>
    </Teste>
  )
}

export default Product
