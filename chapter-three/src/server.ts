import express, { Request, Response, NextFunction } from 'express'
import { AppError } from './errors/AppError'
import 'express-async-errors'

import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'

import './database'
import './shared/container'
import { router } from './routes'

export const app = express()

app.use(express.json())

// Rota p/ documentação com Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// O import 'router' vai conter todas as rotas da aplicação
app.use(router)

app.use(
	(err: Error, request: Request, response: Response, next: NextFunction) => {
		if (err instanceof AppError) {
			return response.status(err.statusCode).json({
				message: err.message,
			})
		}

		return response.status(500).json({
			status: 'error',
			message: `Internal Server Error - ${err.message}`,
		})
	}
)

app.listen(3333, () => console.log('Server listening on port 3333'))
