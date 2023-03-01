import { Router } from 'express'
import { Category } from '../model/Category'

const routes = Router()

const categories: Category[] = []

// Receber informações da categoria no corpo da requisição
routes.post('/', (request, response) => {
  const { name, description } = request.body

  const category = new Category()
  
  Object.assign(category, {
    name,
    description,
    created_at: new Date()
  })

  categories.push(category)

  // Status 201 - Created
  return response.status(201).send()
})

export { routes as categoryRoutes }