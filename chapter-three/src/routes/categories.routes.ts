import { Router } from 'express'
import multer from 'multer'

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { importCategoryController } from '../modules/cars/useCases/importCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const routes = Router()
const upload = multer({
  dest: './tmp',
})

const createCategoryController = new CreateCategoryController()

// Create category
routes.post('/', createCategoryController.handle)

// List categories
routes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response)
})


// Import file
routes.post('/import', upload.single('file'), (request, response) => {
  importCategoryController.handle(request, response)
})

export { routes as categoryRoutes }