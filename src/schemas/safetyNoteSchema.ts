import joi from 'joi';
import {schemaNotes} from '../types/types';

export const notesSchema = joi.object<schemaNotes>({
    title: joi.string().min(1).max(50).required(),
    note: joi.string().min(1).max(1000).required()
})