import { Router } from 'express'
import multer from 'multer'

import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { importCategoryController } from '../modules/cars/useCases/importCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const routes = Router()
const upload = multer({
  dest: './tmp',
})

// Create category
routes.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
})

// List categories
routes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response)
})


// Import file
routes.post('/import', upload.single('file'), (request, response) => {
  importCategoryController.handle(request, response)
})

export { routes as categoryRoutes }