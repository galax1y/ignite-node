import { Specification } from '../entities/Specification'

// Liskov Substitution Principle - LSP
// Criando a estrutura para aplicar princípios do SOLID
// Todos os repositórios que lidam com Specification devem implementar as
// funcionalidades e seguir o 'contrato' definido por essas interfaces

interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface ISpecificationsRepository {
  findByName(name: string): Specification
  create({ name, description }: ICreateSpecificationDTO): void
}

export { ISpecificationsRepository, ICreateSpecificationDTO }