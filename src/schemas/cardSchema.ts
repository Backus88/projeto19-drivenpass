import joi from 'joi';
import {schemaCards} from '../types/types';

export const cardSchema = joi.object<schemaCards>({
    cardNumber: joi.string().min(1).max(128).required(),
    cardHolderName: joi.string().min(1).max(128).required(),
    expirationDate: joi.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/).required(),
    cvc: joi.string().regex(/^([0-9]{3})$/).required(),
    password: joi.string().regex(/^([0-9]{4})$/).required(),
    isVirtual: joi.boolean().required(),
    type: joi.string().required()
}) 