import { v4 as uuidv4 } from 'uuid'
import { Column, CreateDateColumn, Entity } from 'typeorm'
// Faz parte da estrutura do projeto, agindo como uma interface: Define o que é um User

@Entity("users")
class User {
  @Column()
  id: string

  @Column()
  name: string

  @Column()
  username: string

  @Column()
  password: string
  
  @Column()
  email: string

  @Column()
  driver_license: string
  
  @Column()
  isAdmin: boolean
  
  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export { User }