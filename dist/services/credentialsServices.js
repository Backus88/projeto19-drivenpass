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
exports.deleteCredentialsById = exports.canDelete = exports.getCredentialsId = exports.getCredentials = exports.createCredential = exports.checkUniqueCredentials = void 0;
const credentialsRepository_1 = require("../repositories/credentialsRepository");
const errorMessages_1 = require("../utils/errorMessages");
const cryptrInfo_1 = require("../utils/cryptrInfo");
const decryptArray_1 = require("../utils/decryptArray");
function checkUniqueCredentials(credential, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const thereisTitle = yield (0, credentialsRepository_1.getCredentialsByUserIdAndTitle)(credential.title, userId);
        if (thereisTitle.length > 0) {
            throw (0, errorMessages_1.notPossibleOperation)("title already exists");
        }
    });
}
exports.checkUniqueCredentials = checkUniqueCredentials;
function createCredential(credential, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = {
            url: credential.url,
            password: (0, cryptrInfo_1.crypt)(credential.password),
            title: credential.title,
            user: credential.user,
            userId: userId
        };
        yield (0, credentialsRepository_1.insertCredential)(data);
    });
}
exports.createCredential = createCredential;
function getCredentials(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, credentialsRepository_1.getCredentialsById)(userId);
        if (data.length === 0) {
            throw (0, errorMessages_1.notFoundError)('userId');
        }
        return (0, decryptArray_1.decryptArray)(data, 'password');
    });
}
exports.getCredentials = getCredentials;
function getCredentialsId(userId, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, credentialsRepository_1.getCredentialsByUserIdAndId)(id, userId);
        if (data.length === 0) {
            throw (0, errorMessages_1.notFoundError)('userId or id');
        }
        const credentials = data[0];
        credentials.password = (0, cryptrInfo_1.decrypt)(credentials.password);
        return credentials;
    });
}
exports.getCredentialsId = getCredentialsId;
function canDelete(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, credentialsRepository_1.getCredentialsByUserIdAndId)(id, userId);
        if (data.length === 0) {
            throw (0, errorMessages_1.notFoundError)('userId or id');
        }
    });
}
exports.canDelete = canDelete;
function deleteCredentialsById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, credentialsRepository_1.deleteById)(id);
    });
}
exports.deleteCredentialsById = deleteCredentialsById;
