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
exports.deleteCredentials = exports.showCredentialsById = exports.showCredentials = exports.createCredentials = void 0;
const credentialsServices_1 = require("../services/credentialsServices");
function createCredentials(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const credential = req.body;
        const { payload } = res.locals;
        const userId = parseInt(payload.userId);
        yield (0, credentialsServices_1.checkUniqueCredentials)(credential, userId);
        yield (0, credentialsServices_1.createCredential)(credential, userId);
        res.sendStatus(201);
    });
}
exports.createCredentials = createCredentials;
function showCredentials(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { payload } = res.locals;
        const userId = parseInt(payload.userId);
        const credentials = yield (0, credentialsServices_1.getCredentials)(userId);
        res.status(200).send(credentials);
    });
}
exports.showCredentials = showCredentials;
function showCredentialsById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { payload } = res.locals;
        const id = parseInt(req.params.id);
        const userId = parseInt(payload.userId);
        const credentials = yield (0, credentialsServices_1.getCredentialsId)(userId, id);
        res.status(200).send(credentials);
    });
}
exports.showCredentialsById = showCredentialsById;
function deleteCredentials(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { payload } = res.locals;
        const id = parseInt(req.params.id);
        const userId = parseInt(payload.userId);
        yield (0, credentialsServices_1.canDelete)(id, userId);
        yield (0, credentialsServices_1.deleteCredentialsById)(id);
        res.status(201).send('Deleted');
    });
}
exports.deleteCredentials = deleteCredentials;
