import {Request, Response} from 'express';
import {schemaCards} from "../types/types"; 
import {createCard ,checkUniqueCards, getCards, canDelete, getCardsId,deleteCardsById} from '../services/cardServices';

export async function createCards(req:Request, res:Response){
    const card : schemaCards = req.body;
    const {payload}: any = res.locals;
    const userId : number = parseInt(payload.userId);
    await checkUniqueCards(card, userId);
    await createCard(card, userId);
    res.sendStatus(201);
}

export async function showCards(req: Request, res: Response){
    const {payload}: any = res.locals;
    const userId : number = parseInt(payload.userId);
    const cards = await getCards(userId);
    res.status(200).send(cards);
}

export async function showCardsById(req: Request, res: Response){
    const {payload}: any = res.locals;
    const id : number = parseInt(req.params.id);
    const userId : number = parseInt(payload.userId);
    const cards = await getCardsId(userId, id);
    res.status(200).send(cards);
}

export async function deleteCards (req: Request, res: Response){
    const {payload}: any = res.locals;
    const id : number = parseInt(req.params.id);
    const userId : number = parseInt(payload.userId);
    await canDelete(id, userId);
    await deleteCardsById(id)
    res.status(201).send('Deleted');
}