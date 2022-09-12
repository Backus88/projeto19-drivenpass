"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const safetyNoteController_1 = require("../controllers/safetyNoteController");
const tokenValidation_1 = __importDefault(require("../middlewares/tokenValidation"));
const joiValidation_1 = __importDefault(require("../middlewares/joiValidation"));
const safetyNoteSchema_1 = require("../schemas/safetyNoteSchema");
const safetyNoteRouter = (0, express_1.Router)();
safetyNoteRouter.post('/notes', tokenValidation_1.default, (0, joiValidation_1.default)(safetyNoteSchema_1.notesSchema), safetyNoteController_1.createSafetyNote);
safetyNoteRouter.get('/notes', tokenValidation_1.default, safetyNoteController_1.showNotes);
safetyNoteRouter.get('/notes/:id', tokenValidation_1.default, safetyNoteController_1.showNotesById);
safetyNoteRouter.delete('/notes/:id', tokenValidation_1.default, safetyNoteController_1.deleteNotes);
exports.default = safetyNoteRouter;
