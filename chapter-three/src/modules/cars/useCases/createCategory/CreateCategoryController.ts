import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

// Controller lida com o Request recebido, faz o processamento necessário e envia uma Response adequada
class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body

    await this.createCategoryUseCase.execute({ name, description })
  
    return response.status(201).send()
  }
}

export { CreateCategoryController }
