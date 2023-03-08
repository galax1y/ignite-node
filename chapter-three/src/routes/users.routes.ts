import { Router } from 'express';

import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';

const routes = Router()

const createUserController = new CreateUserController()

// Create user
routes.post('/', createUserController.handle)

export { routes as userRoutes }