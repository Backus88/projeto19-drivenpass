import { Router } from "express";
import { createCredentials,
    showCredentials,
    showCredentialsById,
    deleteCredentials } from "../controllers/credentialsController";
import tokenValidation from "../middlewares/tokenValidation";
import joiValidation from "../middlewares/joiValidation";
import {credentialsSchema} from '../schemas/credentialsSchema';


const credentialRouter = Router();

credentialRouter.post('/credentials',tokenValidation,joiValidation(credentialsSchema) ,createCredentials);
credentialRouter.get('/credentials', tokenValidation, showCredentials);
credentialRouter.get('/credentials/:id',tokenValidation, showCredentialsById);
credentialRouter.delete('/credentials/:id', tokenValidation,deleteCredentials);

export default credentialRouter
