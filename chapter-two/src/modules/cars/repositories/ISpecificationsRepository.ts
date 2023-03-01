import { Specification } from '../model/Specification'
// Liskov Substitution Principle - LSP

interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface ISpecificationsRepository {
  findByName(name: string): Specification
  create({ name, description }: ICreateSpecificationDTO): void
}

export { ISpecificationsRepository, ICreateSpecificationDTO }