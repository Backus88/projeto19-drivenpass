import { Router } from "express";
import { createCredentials,
    showCredentials,
    showCredentialsById,
    deleteCredentials } from "../controllers/credentialsController";
import tokenValidation from "../middlewares/tokenValidation";


const credentialRouter = Router();

credentialRouter.post('/credentials',tokenValidation,createCredentials);
credentialRouter.get('/credentials', tokenValidation, showCredentials);
credentialRouter.get('/credentials/:id',tokenValidation, showCredentialsById);
credentialRouter.delete('/credentials/:id', tokenValidation,deleteCredentials);

export default credentialRouter
