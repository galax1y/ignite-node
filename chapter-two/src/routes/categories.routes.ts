import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/createCategory/index'

const routes = Router()
const categoriesRepository = new CategoriesRepository()

// Create category
routes.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
})

// List categories
routes.get('/', (request, response) => {
  const categoriesList = categoriesRepository.list()
  return response.status(200).json(categoriesList)
})

export { routes as categoryRoutes }