import { Specification } from '../../entities/Specification'
import { ICreateSpecificationDTO, ISpecificationsRepository } from './../ISpecificationsRepository'

// Liskov Substitution Principle -> 'implements ...'

// Nos repositories os dados são manipulados
// Importante ressaltar que não é papel dos repositories possuir regras de negócio
class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  // Singleton Design Pattern
  private static INSTANCE: SpecificationsRepository
  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository()
    }
    return SpecificationsRepository.INSTANCE
  }
  
  constructor() {
    this.specifications = []
  }

  list() {
    return this.specifications
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(specification => specification.name === name)
    return specification
  }

  create({ name, description }: ICreateSpecificationDTO) : void {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })
  
    this.specifications.push(specification)
  }
}

export { SpecificationsRepository }