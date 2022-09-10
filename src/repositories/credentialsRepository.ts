import client from "../config/database";
import { schemaCredentials, insertCredentials } from "../types/types"; 

export async function getCredentialsByUserIdAndTitle(title: string, userId: number){
    return await client.credentials.findMany({
        where:{
            userId: userId,
            title: title
        }
    })
}

export async function insertCredential (credential: insertCredentials){
    await client.credentials.create({data:credential});
}

export async function getCredentialsById(userId: number){
    return await client.credentials.findMany({
        where:{
            userId:userId
        }
    })
}
