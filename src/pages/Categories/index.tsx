import ProductsList from '../../components/ProductsList Perfil'
import Game from '../../models/Game'

import resident from '../../assets/images/pizza.png'
import Header from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    titleava: '',
    system: 'Windows',
    infos: [],
    image: resident
  },
  {
    id: 2,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    titleava: '',
    system: 'PS5',
    infos: [],
    image: resident
  },
  {
    id: 3,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    system: 'Windows',
    titleava: '',
    infos: [],
    image: resident
  },
  {
    id: 4,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Resident Evil 4',
    system: 'Windows',
    titleava: '',
    infos: [],
    image: resident
  },
  {
    id: 4,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    system: 'Windows',
    titleava: '',
    infos: [],
    image: resident
  },
  {
    id: 4,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    system: 'Windows',
    titleava: '',
    infos: [],
    image: resident
  }
]

const Categories = () => (
  <>
    <Header />
    <Banner />
    <ProductsList games={promocoes} title="RPG" background="gray" />
  </>
)

export default Categories
