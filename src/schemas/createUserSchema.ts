import joi from 'joi';
import {InsertUser} from '../types/types';

export const createUserSchema = joi.object<InsertUser>({
    email: joi.string().email().required(),
    password: joi.string().min(10).max(128).required()
})