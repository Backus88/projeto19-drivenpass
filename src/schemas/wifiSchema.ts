import joi from 'joi';
import {schemaWifis} from '../types/types';

export const wifiSchema = joi.object<schemaWifis>({
    title: joi.string().min(1).max(128).required(),
    user: joi.string().min(1).max(128).required(),
    password: joi.string().min(1).max(128).required()
})