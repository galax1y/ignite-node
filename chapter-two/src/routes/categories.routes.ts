import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService'

const routes = Router()
const categoriesRepository = new CategoriesRepository()

routes.post('/', (request, response) => {
  const { name, description } = request.body

  const createCategoryService = new CreateCategoryService(categoriesRepository)
  createCategoryService.execute({ name, description })

  return response.status(201).send()
})

routes.get('/', (request, response) => {
  const categoriesList = categoriesRepository.list()

  return response.status(200).json(categoriesList)
})

export { routes as categoryRoutes }