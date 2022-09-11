import client from "../config/database";
import {schemaNotes, insertNotes} from '../types/types';

export async function getNotesByUserIdAndTitle(title: string, userId: number){
    return await client.safetyNotes.findMany({
        where:{
            userId: userId,
            title: title
        }
    })
}

export async function insertNote (note: insertNotes){
    await client.safetyNotes.create({data:note})
}

export async function getNotesById(userId: number){
    return await client.safetyNotes.findMany({
        where:{
            userId:userId
        }
    })
}

export async function getNotesByUserIdAndId(id: number, userId: number){
    return await client.safetyNotes.findMany({
        where:{
            userId: userId,
            id: id
        }
    })
}

export async function deleteById(id: number){
    await client.safetyNotes.delete({
        where:{
            id:id
        }
    })
}
