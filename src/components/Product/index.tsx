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
}

const Product = ({ title, category, description, infos, image, id }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>
        {title}
        <Ava>
          <AvaText>4.9</AvaText>
          <img src={estrela} alt="" />
        </Ava>
      </Titulo>
      <Descricao>{description}</Descricao>
      <Tag>{category}</Tag>
    </Card>
  )
}

export default Product
