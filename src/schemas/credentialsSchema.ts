import joi from 'joi';
import {schemaCredentials} from '../types/types';

export const credentialsSchema = joi.object<schemaCredentials>({
    url: joi.string().regex(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/).required(),
    password: joi.string().required(),
    title: joi.string().required(),
    user: joi.string().required()
}) 