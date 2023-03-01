import { Router } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository'

const routes = Router()

const categoriesRepository = new CategoriesRepository()

// Recebemos as informações da categoria a ser criada no corpo da requisição
routes.post('/', (request, response) => {
  const { name, description } = request.body

  const categoryAlreadyExists = categoriesRepository.findByName(name)

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: 'Category already exists' })
  }

  categoriesRepository.create({ name, description })

  return response.status(201).send()
})

routes.get('/', (request, response) => {
  const categoriesList = categoriesRepository.list()

  return response.status(200).json(categoriesList)
})

export { routes as categoryRoutes }