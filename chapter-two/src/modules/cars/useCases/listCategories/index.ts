import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { ListCategoriesController } from './ListCategoriesController'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

// Esse arquivo cria todas as instâncias necessárias para fazer o Controller funcionar
// O Controller funcionar significa que os requests recebidos na rota vão ser passados para ele
// Em seguida ele aplica a lógica para realizar a regra de negócio especificada.

const categoriesRepository = CategoriesRepository.getInstance()

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository)

const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)

export { listCategoriesController }