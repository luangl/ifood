import Tag from '../Tag'
import estrela from '../../assets/images/estrela.png'

import { Card, Descricao, Titulo, Infos, Ava, AvaText } from './styles'

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
    <Card to="/categories">
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
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
  )
}

export default Product
