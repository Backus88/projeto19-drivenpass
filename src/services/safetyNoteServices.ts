import { notFoundError, notPossibleOperation} from "../utils/errorMessages";
import { getNotesByUserIdAndTitle, 
    insertNote,
    getNotesById,
    getNotesByUserIdAndId,
    deleteById} from "../repositories/safetyNoteRepository";
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

export async function getNotes(userId: number){
    const data = await getNotesById(userId);
    if(data.length ===0){
        throw notFoundError('userId');
    }
    return data;
}

export async function getNotesId(userId: number, id: number){
    const data = await getNotesByUserIdAndId(id, userId);
    if(data.length ===0){
        throw notFoundError('userId or id');
    }
    const notes = data[0];
    return notes
}

export async function canDelete (id: number, userId: number ){
    const data = await getNotesByUserIdAndId(id, userId);
    if(data.length ===0){
        throw notFoundError('userId or id');
    }
}

export async function deleteNotesById (id: number){
    await deleteById(id)
}