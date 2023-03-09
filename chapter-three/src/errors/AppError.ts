// Custom Error object
class AppError {
	public readonly message: string
	public readonly statusCode: number

	// Default status code is 400
	constructor(message: string, statusCode = 400) {
		this.message = message
		this.statusCode = statusCode
	}
}

export { AppError }
