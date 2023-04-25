import Rest from '../../models/Restaurante'
import Product from '../Product Perfil'

import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  restaurante: Rest[]
}

const ProductsList = ({ background, title, restaurante }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {restaurante.map((restaurante) => (
          <Product
            key={restaurante.id}
            category={restaurante.category}
            description={restaurante.description}
            image={restaurante.image}
            infos={restaurante.infos}
            system={restaurante.system}
            title={restaurante.title}
            id={0}
            titleava={restaurante.titleava}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
