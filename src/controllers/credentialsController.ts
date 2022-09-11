import {Request, Response} from 'express';
import { schemaCredentials } from "../types/types"; 
import {canDelete,
    checkUniqueCredentials,
    createCredential,
    getCredentials,
    getCredentialsId,
    deleteCredentialsById} from '../services/credentialsServices';

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

export async function showCredentialsById(req: Request, res: Response){
    const {payload}: any = res.locals;
    const id : number = parseInt(req.params.id);
    const userId : number = parseInt(payload.userId);
    const credentials = await getCredentialsId(userId, id);
    res.status(200).send(credentials);
}

export async function deleteCredentials (req: Request, res: Response){
    const {payload}: any = res.locals;
    const id : number = parseInt(req.params.id);
    const userId : number = parseInt(payload.userId);
    await canDelete(id, userId);
    await deleteCredentialsById(id)
    res.status(201).send('Deleted');
}