import React, { useState, createContext, useEffect } from 'react'
import { ReadObject, SaveObject } from '@services/storage'  
 
export const AuthContext = createContext({})

interface AuthContextProps {
	children: React.ReactNode
}

export const AuthState = ({ children }: AuthContextProps) => {
     
	const [begining, setBegining] = useState(true)    

	const [user, setUser] = useState(null)      

	const contextValue = {
		user, setUser
	}

	const updateStore = async (type : string, value : string | null) => {
		if(!begining){
			await SaveObject(type, value)
		}
	}

	useEffect(() => { readStore() ;}, []) 
 
    useEffect(() => { updateStore('user', user) ;}, [user])   

	const readStore = async () => { 
		setUser(await ReadObject('user'))  

		setBegining(false)
	} 

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}