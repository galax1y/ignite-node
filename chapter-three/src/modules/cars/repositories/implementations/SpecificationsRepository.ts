import { getRepository, Repository } from 'typeorm'
import { Specification } from '../../entities/Specification'
import {
	ICreateSpecificationDTO,
	ISpecificationsRepository,
} from './../ISpecificationsRepository'

// Liskov Substitution Principle -> 'implements ...'

// Nos repositories os dados são manipulados
// Importante ressaltar que não é papel dos repositories possuir regras de negócio
class SpecificationsRepository implements ISpecificationsRepository {
	private repository: Repository<Specification>

	constructor() {
		this.repository = getRepository(Specification)
	}

	async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
		const specification = this.repository.create({
			name,
			description,
		})

		await this.repository.save(specification)
	}

	async list() {
		return await this.repository.find()
	}

	async findByName(name: string): Promise<Specification> {
		const specification = await this.repository.findOne({
			where: {
				name,
			},
		})

		return specification
	}
}

export { SpecificationsRepository }
