import { IUsersRepository } from '../../repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { hash } from 'bcryptjs'
import { AppError } from '../../../../errors/AppError';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {

    const passwordHash = await hash(password, 8)

    const emailAlreadyExists = await this.usersRepository.findByEmail(email)

    if (emailAlreadyExists) {
      throw new AppError('User with this email already exists')
    }

    await this.usersRepository.create({ 
      name,
      email,
      password: passwordHash,
      driver_license })
  }
}

export { CreateUserUseCase }