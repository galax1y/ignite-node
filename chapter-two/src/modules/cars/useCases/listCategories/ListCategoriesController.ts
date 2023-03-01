import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

// Controller lida com o Request recebido, faz o processamento necessário e envia uma Response adequada
class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const categories = this.listCategoriesUseCase.execute()
    
    return response.status(200).json(categories)
  }
}

export { ListCategoriesController}