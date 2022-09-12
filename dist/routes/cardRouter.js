"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tokenValidation_1 = __importDefault(require("../middlewares/tokenValidation"));
const cardTypeValidation_1 = __importDefault(require("../middlewares/cardTypeValidation"));
const cardController_1 = require("../controllers/cardController");
const joiValidation_1 = __importDefault(require("../middlewares/joiValidation"));
const cardSchema_1 = require("../schemas/cardSchema");
const cardRouter = (0, express_1.Router)();
cardRouter.post('/cards', tokenValidation_1.default, cardTypeValidation_1.default, (0, joiValidation_1.default)(cardSchema_1.cardSchema), cardController_1.createCards);
cardRouter.get('/cards', tokenValidation_1.default, cardController_1.showCards);
cardRouter.get('/cards/:id', tokenValidation_1.default, cardController_1.showCardsById);
cardRouter.delete('/cards/:id', tokenValidation_1.default, cardController_1.deleteCards);
exports.default = cardRouter;
