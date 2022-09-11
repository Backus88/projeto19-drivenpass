import {Request, Response} from 'express';
import {schemaNotes} from '../types/types';
import { checkUniqueNote,
    createNote,
    getNotes,
    getNotesId,
    canDelete,
    deleteNotesById } from '../services/safetyNoteServices';


export async function createSafetyNote(req:Request, res:Response){
    const safetyNote : schemaNotes = req.body;
    const {payload}: any = res.locals;
    const userId : number = parseInt(payload.userId);
    await checkUniqueNote(safetyNote.title, userId);
    await createNote(safetyNote, userId);
    res.sendStatus(201);
}

export async function showNotes(req: Request, res: Response){
    const {payload}: any = res.locals;
    const userId : number = parseInt(payload.userId);
    const notes = await getNotes(userId);
    res.status(200).send(notes);
}

export async function showNotesById(req: Request, res: Response){
    const {payload}: any = res.locals;
    const id : number = parseInt(req.params.id);
    const userId : number = parseInt(payload.userId);
    const notes = await getNotesId(userId, id);
    res.status(200).send(notes);
}

export async function deleteNotes (req: Request, res: Response){
    const {payload}: any = res.locals;
    const id : number = parseInt(req.params.id);
    const userId : number = parseInt(payload.userId);
    await canDelete(id, userId);
    await deleteNotesById(id)
    res.status(201).send('Deleted');
}