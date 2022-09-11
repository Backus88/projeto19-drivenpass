import {decrypt} from './cryptrInfo';

export function decryptArray(arr: any[], type: string){
    let newArr = [...arr]
    if(type === 'password'){
        for(const v of newArr){
            v.password = decrypt(v.password)
        }
        return newArr
    }
    
    if(type === 'cvc'){
        for(const v of newArr){
            v.cvc = decrypt(v.cvc)
        }
        return newArr
    }
    return('not valid type');
}