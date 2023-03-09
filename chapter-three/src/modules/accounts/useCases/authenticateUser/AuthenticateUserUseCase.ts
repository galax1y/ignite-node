import { compare } from 'bcryptjs'
import { inject, injectable } from 'tsyringe'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { sign } from 'jsonwebtoken'
import { AppError } from '../../../../errors/AppError'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  },
  token: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    
    // check if user exists
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
       throw new AppError('Email or password is incorrect')
    }

    // check if password is valid
    const passwordMatches = await compare(password, user.password)

    if (!passwordMatches) {
      throw new AppError('Email or password is incorrect')
    }

    // if everything passes, create jwt
    // secret: ignitenode -> md5 hash
    const token = sign({}, "d652eeeea9a382e2b37ad73e0a66b131", {
      subject: user.id,
      expiresIn: "1d",
    })

    return {
      user: {
        name: user.name,
        email: user.email,
      },
      token
    }
  }
}

export  { AuthenticateUserUseCase }