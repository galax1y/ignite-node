import { Router } from 'express'
import multer from 'multer'

import { createCategoryController } from '../modules/cars/useCases/createCategory'
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
  const { file } = request
  console.log(file)
  return response.status(418).send()
})

export { routes as categoryRoutes }