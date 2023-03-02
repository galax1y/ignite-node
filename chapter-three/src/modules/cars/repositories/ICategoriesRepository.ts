import { Category } from '../model/Category'

// Liskov Substitution Principle - LSP
// Criando a estrutura para aplicar princípios do SOLID
// Todos os repositórios que lidam com Category devem implementar as
// funcionalidades e seguir o 'contrato' definido por essas interfaces

interface ICreateCategoryDTO {
  name: string
  description: string
}

interface ICategoriesRepository {
  findByName(name: string): Category
  list(): Category[]
  create({ name, description }: ICreateCategoryDTO): void
}

export { ICategoriesRepository, ICreateCategoryDTO }