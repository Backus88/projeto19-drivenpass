"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errorMessages_1 = require("./errorMessages");
function generateJwtToken(userId) {
    const key = process.env.SECRET_KEY;
    const data = {
        userId: userId
    };
    if (!key) {
        throw (0, errorMessages_1.notFoundError)('key');
    }
    return jsonwebtoken_1.default.sign(data, key, { expiresIn: 60 * 120 });
}
exports.default = generateJwtToken;
