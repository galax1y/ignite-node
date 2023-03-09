import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '../config/upload'

import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController'
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const routes = Router()
const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'))

const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()

// Create user
routes.post('/', createUserController.handle)

// Update user avatar
routes.patch(
	'/avatar',
	ensureAuthenticated,
	uploadAvatar.single('avatar'),
	updateUserAvatarController.handle
)

export { routes as userRoutes }
