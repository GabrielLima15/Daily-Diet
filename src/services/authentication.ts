import { GET, POST } from './api'
import { ReadObject, SaveObject } from './storage'

export const DoRegister = async (params : any) => {
	return await POST(`/users`, params)
}

export const DoLogin = async (params : any) => {
	const response = await POST(`/auth/local`, params)
	if (response?.jwt) {
		await SaveObject('authentication', response)
	}
	return response
}

export const DoLogout = async () => {
	await SaveObject('authentication', '')
	return true
} 
  

export const IsLogged = async () => {
	const authentication = await ReadObject('authentication')
	return authentication?.jwt
}  