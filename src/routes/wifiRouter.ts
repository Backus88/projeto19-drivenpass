import { Router } from "express";
import tokenValidation from "../middlewares/tokenValidation";
import {createWifis,
        showWifis,
        showWifisById,
        deleteWifis} from "../controllers/wifiController";
import joiValidation from "../middlewares/joiValidation";
import {wifiSchema} from '../schemas/wifiSchema';

const wifiRouter = Router();

wifiRouter.post('/wifis',tokenValidation,joiValidation(wifiSchema), createWifis);
wifiRouter.get('/wifis', tokenValidation, showWifis);
wifiRouter.get('/wifis/:id',tokenValidation, showWifisById);
wifiRouter.delete('/wifis/:id', tokenValidation, deleteWifis);

export default wifiRouter
