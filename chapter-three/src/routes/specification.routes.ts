import { Router } from 'express'
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'

const routes = Router()

const createSpecificationController = new CreateSpecificationController()

// Create specification
routes.post('/', createSpecificationController.handle)

// List all specifications
routes.get('/', (request, response) => {
  // return listSpecificationsController.handle(request, response)
})

export { routes as specificationRoutes }