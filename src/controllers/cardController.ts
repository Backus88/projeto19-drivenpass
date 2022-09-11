import {Request, Response} from 'express';
import {schemaCards} from "../types/types"; 
import {createCard ,checkUniqueCards} from '../services/cardServices';

export async function createCards(req:Request, res:Response){
    const card : schemaCards = req.body;
    const {payload}: any = res.locals;
    const userId : number = parseInt(payload.userId);
    await checkUniqueCards(card, userId);
    await createCard(card, userId);
    res.sendStatus(201);
}