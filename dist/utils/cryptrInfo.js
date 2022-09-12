"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.crypt = void 0;
const cryptr_1 = __importDefault(require("cryptr"));
function crypt(password) {
    const cryptr = new cryptr_1.default('newSalt');
    return cryptr.encrypt(password);
}
exports.crypt = crypt;
function decrypt(password) {
    const cryptr = new cryptr_1.default('newSalt');
    return cryptr.decrypt(password);
}
exports.decrypt = decrypt;
