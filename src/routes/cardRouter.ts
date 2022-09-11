import { Router } from "express";
import tokenValidation from "../middlewares/tokenValidation";
import validateCardType from "../middlewares/cardTypeValidation";
import {createCards} from '../controllers/cardController'


const cardRouter = Router();

cardRouter.post('/cards',tokenValidation,validateCardType, createCards);
cardRouter.get('/cards',tokenValidation);
cardRouter.get('/cards/:id',tokenValidation);
cardRouter.delete('/cards/:id',tokenValidation);

export default cardRouter