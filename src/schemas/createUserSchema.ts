import joi from 'joi';
import {InsertUser} from '../types/types';

export const createUserSchema = joi.object<InsertUser>({
    email: joi.string().email().required(),
    password: joi.string().required()
})