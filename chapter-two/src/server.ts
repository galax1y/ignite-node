import express from 'express'
import { router } from './routes'

export const app = express()

app.use(express.json())

// O import 'router' vai conter todas as rotas da aplicação
app.use(router)

app.listen(3333, () => console.log('Server listening on port 3333'))
