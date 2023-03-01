import { Router } from 'express'

interface Category {
  id: string
  name: string,
  description: string,
  created_at: Date
}

const routes = Router()

const categories: Category[] = []

// Receber informações da categoria no corpo da requisição
routes.post('/categories', (request, response) => {
  const { name, description } = request.body
  console.log('route post')
  categories.push({
    id: 'placeholder', // uuid(),
    name,
    description,
    created_at: new Date()
  })

  // Status 201 - Created
  return response.status(201).send()
})

export { routes as categoryRoutes }