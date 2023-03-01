import express from 'express'
import { categoryRoutes } from './routes/categories.routes'
import { specificationRoutes } from './routes/specification.routes'

const app = express()

app.use(express.json())

// Todos os paths dentro de categoryRoutes vão começar com /categories
app.use('/categories', categoryRoutes)
app.use('/specifications', specificationRoutes)

app.listen(3333, () => console.log('Server listening on port 3333'))
