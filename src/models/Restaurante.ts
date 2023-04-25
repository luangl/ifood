class Rest {
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number
  titleava: string

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    title: string,
    titleava: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.system = system
    this.title = title
    this.titleava = titleava
  }
}

export default Rest
