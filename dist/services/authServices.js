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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = exports.checkPassword = exports.createNewUser = exports.checkEmailIsUnique = void 0;
const authRepository_1 = require("../repositories/authRepository");
const errorMessages_1 = require("../utils/errorMessages");
const bcryptInfo_1 = require("../utils/bcryptInfo");
const generateJwtToken_1 = __importDefault(require("../utils/generateJwtToken"));
function checkEmailIsUnique(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const thereIsEmail = yield (0, authRepository_1.getUniqueEmail)(email);
        if (thereIsEmail) {
            throw (0, errorMessages_1.notPossibleOperation)('email already exists');
        }
    });
}
exports.checkEmailIsUnique = checkEmailIsUnique;
function createNewUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        user.password = yield (0, bcryptInfo_1.cryptInfo)(user.password);
        yield (0, authRepository_1.insertUser)(user);
    });
}
exports.createNewUser = createNewUser;
function checkPassword(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const realUser = yield (0, authRepository_1.getUniqueEmail)(user.email);
        if (!realUser) {
            throw (0, errorMessages_1.notFoundError)('email');
        }
        const isAuthorized = yield (0, bcryptInfo_1.descryptInfo)(user.password, realUser.password);
        if (!isAuthorized) {
            throw (0, errorMessages_1.notPossibleOperation)('email and password doesnt match!!');
        }
        return realUser;
    });
}
exports.checkPassword = checkPassword;
function getToken(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, generateJwtToken_1.default)(userId);
    });
}
exports.getToken = getToken;
