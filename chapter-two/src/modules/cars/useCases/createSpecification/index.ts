import { SpecificationsRepository } from '../../repositories/SpecificationsRepository'
import { CreateSpecificationController } from './CreateSpecificationController'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

// Esse arquivo cria todas as instâncias necessárias para fazer o Controller funcionar
// O Controller funcionar significa que os requests recebidos na rota vão ser passados para ele
// Em seguida ele aplica a lógica para realizar a regra de negócio especificada.

const specificationsRepository = new SpecificationsRepository()

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository)

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export { createSpecificationController }