import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'
import { inject, injectable } from 'tsyringe'

// Descreve as informações que o useCase deve receber para executar a sua lógica
interface IRequest {
  name: string
  description: string
}

// Contém a parte de validação dos dados e, se for válido, chama o repositório (categoriesRepository) para manipular os dados.
@injectable()
class CreateCategoryUseCase {
  constructor(
    // Tsyringe dependency injection
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository

  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error("Category already exists")
    }
  
    await this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }