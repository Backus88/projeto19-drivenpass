"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentialsSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.credentialsSchema = joi_1.default.object({
    url: joi_1.default.string().regex(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/).required(),
    password: joi_1.default.string().min(1).max(128).required(),
    title: joi_1.default.string().min(1).max(128).required(),
    user: joi_1.default.string().min(1).max(128).required()
});
