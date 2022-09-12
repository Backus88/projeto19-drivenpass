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
exports.deleteCardsById = exports.canDelete = exports.getCardsId = exports.getCards = exports.createCard = exports.checkCardNumberUnique = exports.checkUniqueCards = void 0;
const decryptArray_1 = require("../utils/decryptArray");
const errorMessages_1 = require("../utils/errorMessages");
const cryptrInfo_1 = require("../utils/cryptrInfo");
const cardRepository_1 = require("../repositories/cardRepository");
function checkUniqueCards(card, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const thereisCard = yield (0, cardRepository_1.getCardsByUserIdAndTitle)(card.cardHolderName, userId);
        if (thereisCard.length > 0) {
            throw (0, errorMessages_1.notPossibleOperation)("title already exists");
        }
    });
}
exports.checkUniqueCards = checkUniqueCards;
function checkCardNumberUnique(cardNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const thereIsCardNumber = yield (0, cardRepository_1.getUniqueCardNumber)(cardNumber);
        if (thereIsCardNumber) {
            throw (0, errorMessages_1.notPossibleOperation)('cardNumber already exists');
        }
    });
}
exports.checkCardNumberUnique = checkCardNumberUnique;
function createCard(card, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = {
            userId: userId,
            cardNumber: card.cardNumber,
            cardHolderName: card.cardHolderName,
            expirationDate: card.expirationDate,
            cvc: (0, cryptrInfo_1.crypt)(card.cvc),
            password: (0, cryptrInfo_1.crypt)(card.password),
            isVirtual: card.isVirtual,
            type: card.type
        };
        yield (0, cardRepository_1.insertCard)(data);
    });
}
exports.createCard = createCard;
function getCards(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, cardRepository_1.getCardsById)(userId);
        if (data.length === 0) {
            throw (0, errorMessages_1.notFoundError)('userId');
        }
        const newArr = (0, decryptArray_1.decryptArray)(data, 'password');
        return (0, decryptArray_1.decryptArray)(newArr, 'cvc');
    });
}
exports.getCards = getCards;
function getCardsId(userId, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, cardRepository_1.getCardsByUserIdAndId)(id, userId);
        if (data.length === 0) {
            throw (0, errorMessages_1.notFoundError)('userId or id');
        }
        const cards = data[0];
        cards.password = (0, cryptrInfo_1.decrypt)(cards.password);
        cards.cvc = (0, cryptrInfo_1.decrypt)(cards.cvc);
        return cards;
    });
}
exports.getCardsId = getCardsId;
function canDelete(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, cardRepository_1.getCardsByUserIdAndId)(id, userId);
        if (data.length === 0) {
            throw (0, errorMessages_1.notFoundError)('userId or id');
        }
    });
}
exports.canDelete = canDelete;
function deleteCardsById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, cardRepository_1.deleteById)(id);
    });
}
exports.deleteCardsById = deleteCardsById;
