"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tokenValidation_1 = __importDefault(require("../middlewares/tokenValidation"));
const wifiController_1 = require("../controllers/wifiController");
const joiValidation_1 = __importDefault(require("../middlewares/joiValidation"));
const wifiSchema_1 = require("../schemas/wifiSchema");
const wifiRouter = (0, express_1.Router)();
wifiRouter.post('/wifis', tokenValidation_1.default, (0, joiValidation_1.default)(wifiSchema_1.wifiSchema), wifiController_1.createWifis);
wifiRouter.get('/wifis', tokenValidation_1.default, wifiController_1.showWifis);
wifiRouter.get('/wifis/:id', tokenValidation_1.default, wifiController_1.showWifisById);
wifiRouter.delete('/wifis/:id', tokenValidation_1.default, wifiController_1.deleteWifis);
exports.default = wifiRouter;
