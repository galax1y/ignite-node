import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

// Controller lida com o Request recebido, faz o processamento necessário e envia uma Response adequada
class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body

    this.createSpecificationUseCase.execute({ name, description })
  
    return response.status(201).send()
  }
}

export { CreateSpecificationController }
