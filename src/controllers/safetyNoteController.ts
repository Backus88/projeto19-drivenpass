import {Request, Response} from 'express';
import {schemaNotes} from '../types/types';
import { checkUniqueNote, createNote } from '../services/safetyNoteServices';


export async function createSafetyNote(req:Request, res:Response){
    const safetyNote : schemaNotes = req.body;
    const {payload}: any = res.locals;
    const userId : number = parseInt(payload.userId);
    await checkUniqueNote(safetyNote.title, userId);
    await createNote(safetyNote, userId);
    res.sendStatus(201);
}