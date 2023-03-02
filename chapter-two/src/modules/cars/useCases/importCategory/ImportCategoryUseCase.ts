class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    console.log("i'm here, file:", file)
  }
}

export { ImportCategoryUseCase }
