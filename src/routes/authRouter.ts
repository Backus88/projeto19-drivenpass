import { Router } from "express";
import { createUser,loginUser } from "../controllers/authController";
import joiValidation from "../middlewares/joiValidation";
import {createUserSchema} from '../schemas/createUserSchema';

const authRouter = Router();

authRouter.post('/register',joiValidation(createUserSchema) ,createUser);
authRouter.post('/login',joiValidation(createUserSchema) ,loginUser);

export default authRouter
