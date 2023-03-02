import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository'

// Descreve as informações que o useCase deve receber para executar a sua lógica
interface IRequest {
  name: string
  description: string
}

// Contém a parte de validação dos dados e, se for válido, chama o repositório (specificationsRepository) para manipular os dados.
class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute({ name, description } : IRequest): void {
    const specificationAlreadyExists = this.specificationRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists')
    }

    this.specificationRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase }
