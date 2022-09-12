"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const joiValidation_1 = __importDefault(require("../middlewares/joiValidation"));
const createUserSchema_1 = require("../schemas/createUserSchema");
const authRouter = (0, express_1.Router)();
authRouter.post('/register', (0, joiValidation_1.default)(createUserSchema_1.createUserSchema), authController_1.createUser);
authRouter.post('/login', (0, joiValidation_1.default)(createUserSchema_1.createUserSchema), authController_1.loginUser);
exports.default = authRouter;
