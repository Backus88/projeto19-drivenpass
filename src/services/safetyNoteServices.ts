import { notFoundError, notPossibleOperation} from "../utils/errorMessages";
import { getNotesByUserIdAndTitle , insertNote} from "../repositories/safetyNoteRepository";
import {schemaNotes, insertNotes} from '../types/types';

export async function checkUniqueNote(title:string,userId: number,){
    const thereisTitle = await getNotesByUserIdAndTitle(title,userId);
    if(thereisTitle.length >0){
        throw notPossibleOperation("title already exists");
    }
}

export async function createNote(safetyNote: schemaNotes, userId: number){
    const data:insertNotes = {
        title:safetyNote.title,
        note: safetyNote.note,
        userId: userId
    }
    await insertNote(data);
}