import {Request, Response} from 'express';
import { schemaCredentials } from "../types/types"; 
import {checkUniqueCredentials, createCredential, getCredentials, getCredentialsTitle} from '../services/credentialsServices';

export async function createCredentials(req:Request, res:Response){
    const credential : schemaCredentials = req.body;
    const {payload}: any = res.locals;
    const userId : number = parseInt(payload.userId);
    await checkUniqueCredentials(credential, userId);
    await createCredential(credential, userId);
    res.sendStatus(201);
}

export async function showCredentials(req: Request, res: Response){
    const {payload}: any = res.locals;
    const userId : number = parseInt(payload.userId);
    const credentials = await getCredentials(userId);
    res.status(200).send(credentials);
}

export async function showCredentialsByTitle(req: Request, res: Response){
    const {payload}: any = res.locals;
    const title : string = req.params.title;
    const userId : number = parseInt(payload.userId);
    const credentials = await getCredentialsTitle(userId, title);
    res.status(200).send(credentials);
}