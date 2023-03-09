import fs from 'node:fs'

export const deleteFile = async (filename: string) => {
	try {
		// Check if the file exists (fs.promises.stat) before doing anything to it
		await fs.promises.stat(filename)
	} catch {
		return
	}

	await fs.promises.unlink(filename)
}
