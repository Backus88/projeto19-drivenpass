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
exports.loginUser = exports.createUser = void 0;
const authServices_1 = require("../services/authServices");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const credentials = req.body;
        yield (0, authServices_1.checkEmailIsUnique)(credentials.email);
        yield (0, authServices_1.createNewUser)(credentials);
        res.sendStatus(201);
        return;
    });
}
exports.createUser = createUser;
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const credentials = req.body;
        const user = yield (0, authServices_1.checkPassword)(credentials);
        const token = yield (0, authServices_1.getToken)(user.id);
        res.status(200).send(token);
    });
}
exports.loginUser = loginUser;
