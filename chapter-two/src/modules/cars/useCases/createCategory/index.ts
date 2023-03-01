import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

// Esse arquivo cria todas as instâncias necessárias para fazer o Controller funcionar
// O Controller funcionar significa que os requests recebidos na rota vão ser passados para ele
// Em seguida ele aplica a lógica para realizar a regra de negócio especificada.

const categoriesRepository = new CategoriesRepository()

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)

const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController }