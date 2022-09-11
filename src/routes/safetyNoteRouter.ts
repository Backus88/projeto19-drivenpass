import { Router } from "express";
import {createSafetyNote, showNotes, showNotesById, deleteNotes} from '../controllers/safetyNoteController';
import tokenValidation from "../middlewares/tokenValidation";


const safetyNoteRouter = Router();

safetyNoteRouter.post('/notes',tokenValidation, createSafetyNote);
safetyNoteRouter.get('/notes',tokenValidation,showNotes);
safetyNoteRouter.get('/notes/:id',tokenValidation,showNotesById);
safetyNoteRouter.delete('/notes/:id',tokenValidation,deleteNotes);

export default safetyNoteRouter
