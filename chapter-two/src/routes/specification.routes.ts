import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository'
import { createSpecificationController } from '../modules/cars/useCases/createSpecification'

const routes = Router()
const specificationsRepository = new SpecificationsRepository()

// Create specification
routes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response)
})

// List all specifications
routes.get('/', (request, response) => {
  const specificationsList = specificationsRepository.list()
  return response.status(200).json(specificationsList)
})

export { routes as specificationRoutes }