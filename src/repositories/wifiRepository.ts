import client from "../config/database";
import {insertWifis} from '../types/types';

export async function insertWifi (wifi: insertWifis){
    await client.wifi.create({data:wifi});
}

export async function getWifiById(userId: number){
    return await client.wifi.findMany({
        where:{
            userId:userId
        }
    })
}

export async function getWifiByUserIdAndId(id: number, userId: number){
    return await client.wifi.findMany({
        where:{
            userId: userId,
            id: id
        }
    })
}

export async function deleteById(id: number){
    await client.wifi.delete({
        where:{
            id:id
        }
    })
}