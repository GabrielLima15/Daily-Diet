import { ReadObject, SaveObject } from './storage'


type ResultType = {
	path?: string;
	fileCopyUri?: string;
	uri?: string;
	croppedImage?: string;
};

type FileToUpload = {
	uri: string;
	name: string;
	type: string;
};

type HeadersType = {
	[key: string]: string;
};

type ResponseJsonType = {
	url?: string;
	[key: string]: any;
};

export const DEVELOPMENT_MODE = true
 
export const API_ENDPOINT = __DEV__ ? 'https://50cb-2804-431-c7f2-1ba7-3ca3-f9ce-27aa-5014.ngrok-free.app/api' : 'https://gabriel-api.staging-xapps.dev'

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

export const ResolveUri = (result: ResultType | string): string | null => {
  const path: string | null = result && typeof result !== 'string'
    ? result.path 
      ?? result.fileCopyUri 
      ?? result.uri 
      ?? result.croppedImage 
      ?? null
    : typeof result === 'string'
    ? result 
    : null;

  return path && path.indexOf('file://') === -1 ? `file://${path}` : path;
};

export const PrepareFile = (result: ResultType): FileToUpload => {
  const uri = ResolveUri(result) || '';
  const name = uri.split('/').pop() || '';
  const match = /\.(\w+)$/.exec(name);
  const type = match ? `image/${match[1]}` : 'image';
  
  return { uri, name, type };
};


export const ServerUploadImage = async (result: ResultType): Promise<ResponseJsonType | false> => {
  console.log("🚀 ~ ServerUploadImage ~ result:", result)
  const fileToUpload = PrepareFile(result);
  return await PostImage(fileToUpload);
};


export const PostImage = async (fileToUpload: FileToUpload): Promise<ResponseJsonType | false> => {
  console.log("🚀 ~ PostImage ~ fileToUpload:", fileToUpload);
  const formData = new FormData();

  let blob;
  try {
    // Obter o Blob a partir da URI
    blob = await fetch(fileToUpload.uri).then(res => res.blob());
    console.log("🚀 ~ PostImage ~ Blob:", blob); // Log para verificar o blob
  } catch (error) {
    console.error("Erro ao converter a URI para Blob", error);
    return false;
  }

  // Certifique-se de que está enviando o arquivo com o nome do campo 'files'
  formData.append('files', blob, fileToUpload.name);
  console.log("🚀 ~ PostImage ~ FormData:", formData);  // Verifique o FormData no console

  const { headers }: { headers: HeadersType } = await GetHeaders(true);
  delete headers['Content-Type'];  // Deixa o Content-Type ser configurado automaticamente

  try {
    const response = await fetch(`${API_ENDPOINT}/upload`, {
      method: 'POST',
      body: formData,
      headers,
    });

    console.log("🚀 ~ PostImage ~ Response:", response);  // Log da resposta

    try {
      const responseJson: ResponseJsonType = await response.json();
      console.log("🚀 ~ PostImage ~ Response JSON:", responseJson);  // Log do JSON da resposta
      return responseJson?.[0] || false;
    } catch (err) {
      console.error('Erro ao analisar a resposta', err);
      return false;
    }
  } catch (er) {
    console.error('Erro de rede ao fazer upload', er);
    return false;
  }
};

