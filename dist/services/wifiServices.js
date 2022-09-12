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
exports.deleteWifiById = exports.canDelete = exports.getwifiId = exports.getWifi = exports.createWifi = void 0;
const wifiRepository_1 = require("../repositories/wifiRepository");
const cryptrInfo_1 = require("../utils/cryptrInfo");
const decryptArray_1 = require("../utils/decryptArray");
const errorMessages_1 = require("../utils/errorMessages");
function createWifi(wifi, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = {
            title: wifi.title,
            password: (0, cryptrInfo_1.crypt)(wifi.password),
            user: wifi.user,
            userId: userId
        };
        yield (0, wifiRepository_1.insertWifi)(data);
    });
}
exports.createWifi = createWifi;
function getWifi(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, wifiRepository_1.getWifiById)(userId);
        if (data.length === 0) {
            throw (0, errorMessages_1.notFoundError)('userId');
        }
        return (0, decryptArray_1.decryptArray)(data, 'password');
    });
}
exports.getWifi = getWifi;
function getwifiId(userId, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, wifiRepository_1.getWifiByUserIdAndId)(id, userId);
        if (data.length === 0) {
            throw (0, errorMessages_1.notFoundError)('userId or id');
        }
        const wifi = data[0];
        wifi.password = (0, cryptrInfo_1.decrypt)(wifi.password);
        return wifi;
    });
}
exports.getwifiId = getwifiId;
function canDelete(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, wifiRepository_1.getWifiByUserIdAndId)(id, userId);
        if (data.length === 0) {
            throw (0, errorMessages_1.notFoundError)('userId or id');
        }
    });
}
exports.canDelete = canDelete;
function deleteWifiById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, wifiRepository_1.deleteById)(id);
    });
}
exports.deleteWifiById = deleteWifiById;
