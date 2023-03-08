import { Router } from 'express';
import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const routes = Router()

const authenticateUserController = new AuthenticateUserController()

// Authenticate user
routes.post('/', authenticateUserController.handle)

export { routes as authenticationRoutes }