import { ReadObject, SaveObject } from './storage'

export const DEVELOPMENT_MODE = true
 
export const API_ENDPOINT = __DEV__ ? 'http://localhost:1337/api' : 'https://gabriel-api.staging-xapps.dev'

export const GetHeaders = async (authenticated = false) => {
	const headers: { 'Content-Type': string; Authorization?: string } = { 'Content-Type': 'application/json' }
	const authentication = await ReadObject('authentication')
	if (authenticated && authentication?.jwt) {
		headers.Authorization = `Bearer ${authentication?.jwt}`
	}
	return { headers }
}

export const ServerFetch = async (url : string, options : any, authenticated = false) => {
	const { headers } = await GetHeaders(authenticated)
	try{
		const response = await fetch(url, { ...options, headers })
		if (response.status === 403 && authenticated) {
			await SaveObject('authentication', "")
		}
		try{
			return await response.json()
		}catch(err){
			console.log('ServerParseError', err)
			return { error:true, message:response }
		} 
	}catch(error){
		console.log('ServerFetchError', error)
		return false
	}
}

export const GET = async (path : string, authenticated = false) => {
	return await ServerFetch(
		`${API_ENDPOINT}${path}`,
		{
			method: 'GET'
		},
		authenticated
	)
}

export const POST = async (path : string, body : any, authenticated = false) => {
	return await ServerFetch(
		`${API_ENDPOINT}${path}`,
		{
			method: 'POST',
			body: JSON.stringify(body)
		},
		authenticated
	)
}

export const PUT = async (path : string, body : any, authenticated = false) => {
	return await ServerFetch(
		`${API_ENDPOINT}${path}`,
		{
			method: 'PUT',
			body: JSON.stringify(body)
		},
		authenticated
	)
}

export const DELETE = async (path : string, authenticated = false) => {
	return await ServerFetch(
		`${API_ENDPOINT}${path}`,
		{
			method: 'DELETE'
		},
		authenticated
	)
}