import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

// Esse arquivo cria todas as instâncias necessárias para fazer o Controller funcionar
// O Controller funcionar significa que os requests recebidos na rota vão ser passados para ele
// Em seguida ele aplica a lógica para realizar a regra de negócio especificada.

export default (): CreateCategoryController => {
  const categoriesRepository = new CategoriesRepository()
  
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
  
  const createCategoryController = new CreateCategoryController(createCategoryUseCase)
  
  return createCategoryController
}


