import { v4 as uuidv4 } from 'uuid'

// Faz parte da estrutura do projeto, agindo como uma interface: Define o que é uma Category

class Category {
  id?: string
  name: string
  description: string
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export { Category }
