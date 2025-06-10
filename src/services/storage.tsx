import AsyncStorage from '@react-native-async-storage/async-storage';

export const storageKey = 'Stor:Gabriel:@1.0.0'

export const SaveObject = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(`${storageKey}::${key}`, jsonValue);
  } catch (error) {
    console.error('Error saving data to AsyncStorage', error);
  }
};

export const ReadObject = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(`${storageKey}::${key}`);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error reading data from AsyncStorage', error);
    return null;
  }
};

export const SaveStorage = async (key : string, value : any) => {
    return await AsyncStorage.setItem(`${ storageKey }::${ key }`, value)
} 

export const ReadStorage = async (key : string) => {
    return await AsyncStorage.getItem(`${ storageKey }::${ key }`)
}