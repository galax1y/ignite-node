import { Router } from 'express'
import { authenticationRoutes } from './authenticate.routes'
import { categoryRoutes } from './categories.routes'
import { specificationRoutes } from './specification.routes'
import { userRoutes } from './users.routes'

const router = Router()

router.use('/categories', categoryRoutes)
router.use('/specifications', specificationRoutes)
router.use('/users', userRoutes)
router.use('/sessions', authenticationRoutes)

export { router }