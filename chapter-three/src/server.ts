import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import { router } from './routes'
import { createConnection } from './database';

createConnection();

export const app = express()

app.use(express.json())

// Rota p/ documentação com Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

// O import 'router' vai conter todas as rotas da aplicação
app.use(router)

app.listen(3333, () => console.log('Server listening on port 3333'))
