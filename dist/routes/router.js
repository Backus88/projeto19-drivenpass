"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRouter_1 = __importDefault(require("./authRouter"));
const credentialRouter_1 = __importDefault(require("./credentialRouter"));
const safetyNoteRouter_1 = __importDefault(require("./safetyNoteRouter"));
const cardRouter_1 = __importDefault(require("./cardRouter"));
const wifiRouter_1 = __importDefault(require("./wifiRouter"));
const router = (0, express_1.Router)();
router.use(authRouter_1.default);
router.use(credentialRouter_1.default);
router.use(safetyNoteRouter_1.default);
router.use(cardRouter_1.default);
router.use(wifiRouter_1.default);
exports.default = router;
