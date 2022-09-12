"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.cardSchema = joi_1.default.object({
    cardNumber: joi_1.default.string().min(1).max(128).required(),
    cardHolderName: joi_1.default.string().min(1).max(128).required(),
    expirationDate: joi_1.default.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/).required(),
    cvc: joi_1.default.string().regex(/^([0-9]{3})$/).required(),
    password: joi_1.default.string().regex(/^([0-9]{4})$/).required(),
    isVirtual: joi_1.default.boolean().required(),
    type: joi_1.default.string().required()
});
