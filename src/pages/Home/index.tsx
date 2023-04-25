import ProductsList from '../../components/ProductsList'
import Rest from '../../models/Restaurante'

import italiana from '../../assets/images/italiana.png'
import sushi from '../../assets/images/sushi.png'
import Header from '../../components/Header'

const promocoes: Rest[] = [
  {
    id: 1,
    category: 'Saiba Mais',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    titleava: '4.9',
    system: 'Windows',
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi
  },
  {
    id: 2,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    titleava: '4.6',
    system: 'PS5',
    infos: ['Italiana'],
    image: italiana
  },
  {
    id: 3,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    titleava: '4.6',
    system: 'Windows',
    infos: ['Italiana'],
    image: italiana
  },
  {
    id: 4,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    titleava: '4.6',
    system: 'Windows',
    infos: ['Italiana'],
    image: italiana
  },
  {
    id: 5,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    titleava: '4.6',
    system: 'Windows',
    infos: ['Italiana'],
    image: italiana
  },
  {
    id: 6,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    titleava: '4.6',
    system: 'Windows',
    infos: ['Italiana'],
    image: italiana
  }
]
const Home = () => (
  <>
    <Header />
    <ProductsList restaurante={promocoes} title="Promoções" background="gray" />
  </>
)

export default Home
