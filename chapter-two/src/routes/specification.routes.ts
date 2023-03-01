import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'

const routes = Router()
const specificationsRepository = new SpecificationsRepository()

// Create specification
routes.post('/', (request, response) => {
  const { name, description } = request.body

  const createSpecificationsService = new CreateSpecificationService(specificationsRepository)

  createSpecificationsService.execute({ name, description })

  return response.status(201).send()
})

// List all specifications
routes.get('/', (request, response) => {
  const specificationsList = specificationsRepository.list()
  return response.status(200).json(specificationsList)
})

export { routes as specificationRoutes }