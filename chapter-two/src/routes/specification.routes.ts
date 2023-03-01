import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository'
import { createSpecificationController } from '../modules/cars/useCases/createSpecification'

const routes = Router()

// Create specification
routes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response)
})

// List all specifications
routes.get('/', (request, response) => {
  // return listSpecificationsController.handle(request, response)
})

export { routes as specificationRoutes }