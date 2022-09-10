import {Request, Response} from 'express'
import {InsertUser} from '../types/types'
import { checkEmailIsUnique, createNewUser, checkPassword, getToken } from '../services/authServices';

export async function createUser (req: Request, res: Response){
    const credentials :InsertUser = req.body;
    await checkEmailIsUnique(credentials.email);
    await createNewUser(credentials);
    res.sendStatus(201);
    return;
}

export async function loginUser(req: Request, res: Response){
    const credentials :InsertUser = req.body;
    const user = await checkPassword(credentials);
    const token = await getToken(user.id);
    res.status(200).send(token);
}