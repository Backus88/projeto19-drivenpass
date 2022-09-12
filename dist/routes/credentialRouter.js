"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const credentialsController_1 = require("../controllers/credentialsController");
const tokenValidation_1 = __importDefault(require("../middlewares/tokenValidation"));
const joiValidation_1 = __importDefault(require("../middlewares/joiValidation"));
const credentialsSchema_1 = require("../schemas/credentialsSchema");
const credentialRouter = (0, express_1.Router)();
credentialRouter.post('/credentials', tokenValidation_1.default, (0, joiValidation_1.default)(credentialsSchema_1.credentialsSchema), credentialsController_1.createCredentials);
credentialRouter.get('/credentials', tokenValidation_1.default, credentialsController_1.showCredentials);
credentialRouter.get('/credentials/:id', tokenValidation_1.default, credentialsController_1.showCredentialsById);
credentialRouter.delete('/credentials/:id', tokenValidation_1.default, credentialsController_1.deleteCredentials);
exports.default = credentialRouter;
