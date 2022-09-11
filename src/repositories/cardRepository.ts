import client from "../config/database";
import {insertCards} from '../types/types'

export async function getCardsByUserIdAndTitle(cardHolderName: string, userId: number){
    return await client.cards.findMany({
        where:{
            userId: userId,
            cardHolderName: cardHolderName
        }
    })
}

export async function insertCard (card: insertCards){
    await client.cards.create({data:card});
}

export async function getCardsById(userId: number){
    return await client.cards.findMany({
        where:{
            userId:userId
        }
    })
}

export async function getCardsByUserIdAndId(id: number, userId: number){
    return await client.cards.findMany({
        where:{
            userId: userId,
            id: id
        }
    })
}

export async function deleteById(id: number){
    await client.cards.delete({
        where:{
            id:id
        }
    })
}