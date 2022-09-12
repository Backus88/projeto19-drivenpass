"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCards = exports.showCardsById = exports.showCards = exports.createCards = void 0;
const cardServices_1 = require("../services/cardServices");
function createCards(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const card = req.body;
        const { payload } = res.locals;
        const userId = parseInt(payload.userId);
        yield (0, cardServices_1.checkCardNumberUnique)(card.cardNumber);
        yield (0, cardServices_1.checkUniqueCards)(card, userId);
        yield (0, cardServices_1.createCard)(card, userId);
        res.sendStatus(201);
    });
}
exports.createCards = createCards;
function showCards(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { payload } = res.locals;
        const userId = parseInt(payload.userId);
        const cards = yield (0, cardServices_1.getCards)(userId);
        res.status(200).send(cards);
    });
}
exports.showCards = showCards;
function showCardsById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { payload } = res.locals;
        const id = parseInt(req.params.id);
        const userId = parseInt(payload.userId);
        const cards = yield (0, cardServices_1.getCardsId)(userId, id);
        res.status(200).send(cards);
    });
}
exports.showCardsById = showCardsById;
function deleteCards(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { payload } = res.locals;
        const id = parseInt(req.params.id);
        const userId = parseInt(payload.userId);
        yield (0, cardServices_1.canDelete)(id, userId);
        yield (0, cardServices_1.deleteCardsById)(id);
        res.status(201).send('Deleted');
    });
}
exports.deleteCards = deleteCards;
