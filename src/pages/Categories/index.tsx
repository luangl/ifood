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
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    titleava: '',
    system: 'Windows',
    infos: [],
    image: resident
  },
  {
    id: 2,
    category: 'Adicionar ao carrinho',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    titleava: '',
    system: 'PS5',
    infos: [],
    image: resident
  },
  {
    id: 3,
    category: 'Adicionar ao carrinho',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
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
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
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
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
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
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
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
