import { Router } from "express";
import { createCredentials,showCredentials } from "../controllers/credentialsController";
import tokenValidation from "../middlewares/tokenValidation";


const credentialRouter = Router();

credentialRouter.post('/credentials',tokenValidation,createCredentials);
credentialRouter.get('/credentials', tokenValidation, showCredentials);
credentialRouter.get('/credentials/:title');

export default credentialRouter