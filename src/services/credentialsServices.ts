import {getCredentialsByUserIdAndTitle, insertCredential, getCredentialsById} from '../repositories/credentialsRepository';
import { schemaCredentials, insertCredentials } from "../types/types"; 
import { notPossibleOperation} from "../utils/errorMessages";
import { crypt, decrypt } from '../utils/cryptrInfo';

export async function checkUniqueCredentials(credential:schemaCredentials,userId: number,){
    const thereisTitle = await getCredentialsByUserIdAndTitle(credential.title,userId);
    if(thereisTitle.length >0){
        throw notPossibleOperation("title already exists");
    }
}

export async function createCredential(credential: schemaCredentials, userId: number){
    const data:insertCredentials = {
        url:credential.url,
        password:crypt(credential.password),
        title:credential.title,
        user: credential.user,
        userId: userId
    }
    await insertCredential(data);
}

export async function getCredentials(userId: number){
    const data = await getCredentialsById(userId);
    const credentials = data[0];
    credentials.password = decrypt(credentials.password)
    return data
}