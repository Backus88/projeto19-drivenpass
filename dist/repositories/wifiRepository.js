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
exports.deleteById = exports.getWifiByUserIdAndId = exports.getWifiById = exports.insertWifi = void 0;
const database_1 = __importDefault(require("../config/database"));
function insertWifi(wifi) {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.default.wifi.create({ data: wifi });
    });
}
exports.insertWifi = insertWifi;
function getWifiById(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.wifi.findMany({
            where: {
                userId: userId
            }
        });
    });
}
exports.getWifiById = getWifiById;
function getWifiByUserIdAndId(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.wifi.findMany({
            where: {
                userId: userId,
                id: id
            }
        });
    });
}
exports.getWifiByUserIdAndId = getWifiByUserIdAndId;
function deleteById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.default.wifi.delete({
            where: {
                id: id
            }
        });
    });
}
exports.deleteById = deleteById;
