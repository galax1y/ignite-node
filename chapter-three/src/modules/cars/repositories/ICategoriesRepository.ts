import { Category } from '../entities/Category'

// Liskov Substitution Principle - LSP
// Criando a estrutura para aplicar princípios do SOLID
// Todos os repositórios que lidam com Category devem implementar as
// funcionalidades e seguir o 'contrato' definido por essas interfaces

interface ICreateCategoryDTO {
  name: string
  description: string
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>
  list(): Promise<Category[]>
  create({ name, description }: ICreateCategoryDTO): Promise<void>
}

export { ICategoriesRepository, ICreateCategoryDTO }