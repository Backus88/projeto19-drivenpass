import { Router } from "express";
import {createSafetyNote, showNotes, showNotesById, deleteNotes} from '../controllers/safetyNoteController';
import tokenValidation from "../middlewares/tokenValidation";
import joiValidation from "../middlewares/joiValidation";
import {notesSchema} from '../schemas/safetyNoteSchema';

const safetyNoteRouter = Router();

safetyNoteRouter.post('/notes',tokenValidation,joiValidation(notesSchema), createSafetyNote);
safetyNoteRouter.get('/notes',tokenValidation,showNotes);
safetyNoteRouter.get('/notes/:id',tokenValidation,showNotesById);
safetyNoteRouter.delete('/notes/:id',tokenValidation,deleteNotes);

export default safetyNoteRouter
