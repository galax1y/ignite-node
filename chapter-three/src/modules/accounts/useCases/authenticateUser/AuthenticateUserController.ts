import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

    try {
      const authToken = await authenticateUserUseCase.execute({ email, password })
      return response.json(authToken)
    } catch (error) {
      return response.status(500).json({ error })
    }
  }
}

export  { AuthenticateUserController }