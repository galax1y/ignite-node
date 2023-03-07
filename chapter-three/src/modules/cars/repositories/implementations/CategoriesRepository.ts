import { getRepository, Repository } from 'typeorm'
import { Category } from '../../entities/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository'

// Liskov Substitution Principle -> 'implements ...'

// Nos repositories os dados são manipulados
// Importante ressaltar que não é papel dos repositories possuir regras de negócio
class CategoriesRepository implements ICategoriesRepository {
 private repository: Repository<Category>
  
  constructor() {
    this.repository = getRepository(Category)
  }

  async create({ name, description }: ICreateCategoryDTO) : Promise<void> {
    const category = this.repository.create({
      description,
      name,
    })

    await this.repository.save(category)
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find()
    return categories
  }

  async findByName(name: string) : Promise<Category> {
    const category = await this.repository.findOne({
      where: {
        name,
      },
    })

    return category
  }
}

export { CategoriesRepository }