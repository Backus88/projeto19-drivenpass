import {Router} from 'express';
import authRouter from './authRouter';
import credentialRouter from './credentialRouter';
import safetyNoteRouter from './safetyNoteRouter';
import cardRouter from './cardRouter';

const router = Router();

router.use(authRouter);
router.use(credentialRouter);
router.use(safetyNoteRouter);
router.use(cardRouter);

export default router;