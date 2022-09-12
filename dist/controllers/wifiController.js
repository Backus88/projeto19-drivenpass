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
exports.deleteWifis = exports.showWifisById = exports.showWifis = exports.createWifis = void 0;
const wifiServices_1 = require("../services/wifiServices");
function createWifis(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const wifi = req.body;
        const { payload } = res.locals;
        const userId = parseInt(payload.userId);
        yield (0, wifiServices_1.createWifi)(wifi, userId);
        res.sendStatus(201);
    });
}
exports.createWifis = createWifis;
function showWifis(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { payload } = res.locals;
        const userId = parseInt(payload.userId);
        const wifis = yield (0, wifiServices_1.getWifi)(userId);
        res.status(200).send(wifis);
    });
}
exports.showWifis = showWifis;
function showWifisById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { payload } = res.locals;
        const id = parseInt(req.params.id);
        const userId = parseInt(payload.userId);
        const wifis = yield (0, wifiServices_1.getwifiId)(userId, id);
        res.status(200).send(wifis);
    });
}
exports.showWifisById = showWifisById;
function deleteWifis(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { payload } = res.locals;
        const id = parseInt(req.params.id);
        const userId = parseInt(payload.userId);
        yield (0, wifiServices_1.canDelete)(id, userId);
        yield (0, wifiServices_1.deleteWifiById)(id);
        res.status(201).send('Deleted');
    });
}
exports.deleteWifis = deleteWifis;
