import { inject, injectable } from 'tsyringe'
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository'

// Descreve as informações que o useCase deve receber para executar a sua lógica
interface IRequest {
  name: string
  description: string
}

// Contém a parte de validação dos dados e, se for válido, chama o repositório (specificationsRepository) para manipular os dados.
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository
  ) {}

  async execute({ name, description } : IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists')
    }

    await this.specificationRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase }
