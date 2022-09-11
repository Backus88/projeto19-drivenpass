import { Router } from "express";
import tokenValidation from "../middlewares/tokenValidation";
import validateCardType from "../middlewares/cardTypeValidation";
import {createCards, showCards, showCardsById, deleteCards} from '../controllers/cardController'
import joiValidation from "../middlewares/joiValidation";
import {cardSchema} from '../schemas/cardSchema';

const cardRouter = Router();

cardRouter.post('/cards',tokenValidation,validateCardType, joiValidation(cardSchema), createCards);
cardRouter.get('/cards',tokenValidation, showCards);
cardRouter.get('/cards/:id',tokenValidation, showCardsById);
cardRouter.delete('/cards/:id',tokenValidation, deleteCards);

export default cardRouter