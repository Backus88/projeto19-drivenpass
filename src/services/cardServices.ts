import {decryptArray} from '../utils/decryptArray';
import { notFoundError, notPossibleOperation} from "../utils/errorMessages";
import { crypt, decrypt } from '../utils/cryptrInfo';
import { insertCards, schemaCards } from '../types/types';
import {insertCard, getCardsByUserIdAndTitle} from '../repositories/cardRepository';

export async function checkUniqueCards(card:schemaCards,userId: number){
    const thereisCard = await getCardsByUserIdAndTitle(card.cardHolderName,userId);
    if(thereisCard.length >0){
        throw notPossibleOperation("title already exists");
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