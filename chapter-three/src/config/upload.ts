import { resolve } from 'path'
import crypto from 'crypto'
import multer from 'multer'

// Propósito desse arquivo: configuração do multer para receber arquivos por upload
// Outro propósito secundário: separar a configuração do multer do arquivo de rota

export default {
	upload(folder: string) {
		return {
			storage: multer.diskStorage({
				destination: resolve(__dirname, '..', '..', folder),
				filename: (request, file, callback) => {
					const fileHash = crypto.randomBytes(16).toString('hex')

					const fileName = `${fileHash}-${file.originalname}`

					return callback(null, fileName)
				},
			}),
		}
	},
}
