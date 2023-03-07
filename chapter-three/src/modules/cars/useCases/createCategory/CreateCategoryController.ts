import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

// Controller lida com o Request recebido, faz o processamento necessário e envia uma Response adequada
class CreateCategoryController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body
    
    // Tsyringe dependency injection
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase)

    await createCategoryUseCase.execute({ name, description })
  
    return response.status(201).send()
  }
}

export { CreateCategoryController }
