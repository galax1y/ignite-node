import { ICategoriesRepository } from '../repositories/ICategoriesRepository'

interface IRequest {
  name: string
  description: string
}
// SRP - Single Responsibility Principle
// Cada classe deve ter apenas uma responsabilidade, um propósito.
// Uma classe deve ter apenas um motivo para mudar.
// A única responsabilidade dessa classe é de criar a categoria
class CreateCategoryService {
  // DIP - Dependency Inversion Principle
  // A classe de alto nível não deve depender de uma tecnologia específica, mas sim de abstrações.
  // Nesse caso específico, não deve depender do tipo de banco de dados, mas sim de uma abstração
  // Essa abstração inclui funcionalidades que todos os bancos de dados possuem, como criar uma entrada
  // em uma tabela ou encontrar uma entrada com base no valor de um campo.
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error("Category already exists")
    }
  
    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryService }