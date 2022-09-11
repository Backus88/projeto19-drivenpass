import {decryptArray} from '../utils/decryptArray';
import { notFoundError, notPossibleOperation} from "../utils/errorMessages";
import { crypt, decrypt } from '../utils/cryptrInfo';
import { insertCards, schemaCards } from '../types/types';
import {insertCard,
    getCardsByUserIdAndTitle,
    getCardsById,
    getCardsByUserIdAndId,
    deleteById,
    getUniqueCardNumber} from '../repositories/cardRepository';

export async function checkUniqueCards(card:schemaCards,userId: number){
    const thereisCard = await getCardsByUserIdAndTitle(card.cardHolderName,userId);
    if(thereisCard.length >0){
        throw notPossibleOperation("title already exists");
    }
}

export async function checkCardNumberUnique (cardNumber:string){
    const thereIsCardNumber = await getUniqueCardNumber(cardNumber)
    if(thereIsCardNumber){
        throw notPossibleOperation('cardNumber already exists');
    }
}

export async function createCard(card: schemaCards, userId: number){
    const data:insertCards = {
        userId: userId,
        cardNumber:card.cardNumber,
        cardHolderName:card.cardHolderName,
        expirationDate:card.expirationDate,
        cvc: crypt(card.cvc),
        password: crypt(card.password),
        isVirtual: card.isVirtual,
        type: card.type
    }
    await insertCard(data);
}


export async function getCards(userId: number){
    const data = await getCardsById(userId);
    if(data.length ===0){
        throw notFoundError('userId');
    }
    const newArr: any= decryptArray(data, 'password');
    return decryptArray(newArr, 'cvc');
    
}

export async function getCardsId(userId: number, id: number){
    const data = await getCardsByUserIdAndId(id, userId);
    if(data.length ===0){
        throw notFoundError('userId or id');
    }
    const cards = data[0];
    cards.password = decrypt(cards.password);
    cards.cvc = decrypt(cards.cvc);
    return cards
}

export async function canDelete (id: number, userId: number ){
    const data = await getCardsByUserIdAndId(id, userId);
    if(data.length ===0){
        throw notFoundError('userId or id');
    }
}

export async function deleteCardsById (id: number){
    await deleteById(id)
}