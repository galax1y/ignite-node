import { Request, Response, NextFunction } from 'express';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';
import { AppError } from '../errors/AppError';
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string

}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('Auth token missing', 401)
  }

  const [, token] = authHeader.split(' ')

  try{
    const { sub: user_id } = verify(token, "d652eeeea9a382e2b37ad73e0a66b131") as IPayload

    const usersRepository = new UsersRepository()

    const user = await usersRepository.findById(user_id)

    if (!user) {
      throw new AppError('User does not exist', 401)
    }
		
    request.user = {
      id: user.id,
    }
    
    next()
		
  } catch {
    throw new AppError('Invalid auth token', 401)
  }
}