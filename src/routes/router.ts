import {Router} from 'express';
import authRouter from './authRouter';
import credentialRouter from './credentialRouter';
import safetyNoteRouter from './safetyNoteRouter';
import cardRouter from './cardRouter';
import wifiRouter from './wifiRouter';

const router = Router();

router.use(authRouter);
router.use(credentialRouter);
router.use(safetyNoteRouter);
router.use(cardRouter);
router.use(wifiRouter);

export default router;