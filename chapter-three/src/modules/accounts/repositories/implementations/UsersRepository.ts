import { getRepository, Repository } from 'typeorm';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }
  
  async findById(id: string): Promise<User> {
    const userFound = await this.repository.findOne({
      where: {
        id,
      },
    })

    return userFound
  }

  async findByEmail(email: string): Promise<User> {
    const userFound = await this.repository.findOne({
      where: {
        email,
      }
    })

    return userFound
  }

  async create({ name, email, password, driver_license, avatar, id }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      driver_license,
      avatar,
      id,
    })

    await this.repository.save(user)
  }
}

export { UsersRepository }