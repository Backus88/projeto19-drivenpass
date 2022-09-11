import { Router } from "express";
import {createSafetyNote} from '../controllers/safetyNoteController';
import tokenValidation from "../middlewares/tokenValidation";


const safetyNoteRouter = Router();

safetyNoteRouter.post('/notes',tokenValidation, createSafetyNote);

export default safetyNoteRouter
