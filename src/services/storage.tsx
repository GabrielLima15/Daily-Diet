import AsyncStorage from '@react-native-async-storage/async-storage';

export const storageKey = 'Stor:Gabriel:@1.0.0'

export const SaveObject = async (key : string, value : string | null) => {
    return await SaveStorage(key, JSON.stringify(value))
}

export const ReadObject = async (key : string) => {
    const item = await ReadStorage(key);
    return item ? JSON.parse(item) : null;
}

export const SaveStorage = async (key : string, value : any) => {
    return await AsyncStorage.setItem(`${ storageKey }::${ key }`, value)
} 

export const ReadStorage = async (key : string) => {
    return await AsyncStorage.getItem(`${ storageKey }::${ key }`)
}