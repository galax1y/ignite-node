import fs from 'node:fs'
import { parse as csvParse } from 'csv-parse'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { inject, injectable } from 'tsyringe'

interface IImportCategory {
  name: string
  description: string
}

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  private loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const categories: IImportCategory[] = []
  
      const parseFile = csvParse()
  
      // Função pipe coleta o chunk de dentro do Stream e o envia para o parser
      stream.pipe(parseFile)
  
      // Aqui, o csv-parser lê cada chunk (linha) chegando através do pipe
      parseFile.on('data', async (line) => {
        const [name, description] = line
        categories.push({
          name,
          description,
        })
      })
      .on('end', () => {
        fs.promises.unlink(file.path) // Remover o arquivo temporário
        resolve(categories)
      })
      .on('error', (err) => {
        reject(err)
      })
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)

    categories.map(async (category) => {
      const { name, description } = category

      const categoryAlreadyExists = await this.categoriesRepository.findByName(name)
      
      if (!categoryAlreadyExists) {
        await this.categoriesRepository.create({ name, description })
      }
    })
  }
}

export { ImportCategoryUseCase }
