import {insertWifis, schemaWifis} from '../types/types';
import { insertWifi, getWifiById, getWifiByUserIdAndId, deleteById } from '../repositories/wifiRepository';
import { crypt, decrypt } from '../utils/cryptrInfo';
import { decryptArray } from '../utils/decryptArray';
import { notFoundError } from '../utils/errorMessages';

export async function createWifi(wifi: schemaWifis, userId: number){
    const data:insertWifis = {
        title:wifi.title,
        password: crypt(wifi.password),
        user: wifi.user,
        userId: userId
    }
    await insertWifi(data);
}

export async function getWifi(userId: number){
    const data = await getWifiById(userId);
    if(data.length ===0){
        throw notFoundError('userId');
    }
    return decryptArray(data, 'password');
}

export async function getwifiId(userId: number, id: number){
    const data = await getWifiByUserIdAndId(id, userId);
    if(data.length ===0){
        throw notFoundError('userId or id');
    }
    const wifi = data[0];
    wifi.password = decrypt(wifi.password);
    return wifi
}

export async function canDelete (id: number, userId: number ){
    const data = await getWifiByUserIdAndId(id, userId);
    if(data.length ===0){
        throw notFoundError('userId or id');
    }
}

export async function deleteWifiById (id: number){
    await deleteById(id)
}