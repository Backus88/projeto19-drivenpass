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
exports.deleteNotes = exports.showNotesById = exports.showNotes = exports.createSafetyNote = void 0;
const safetyNoteServices_1 = require("../services/safetyNoteServices");
function createSafetyNote(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const safetyNote = req.body;
        const { payload } = res.locals;
        const userId = parseInt(payload.userId);
        yield (0, safetyNoteServices_1.checkUniqueNote)(safetyNote.title, userId);
        yield (0, safetyNoteServices_1.createNote)(safetyNote, userId);
        res.sendStatus(201);
    });
}
exports.createSafetyNote = createSafetyNote;
function showNotes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { payload } = res.locals;
        const userId = parseInt(payload.userId);
        const notes = yield (0, safetyNoteServices_1.getNotes)(userId);
        res.status(200).send(notes);
    });
}
exports.showNotes = showNotes;
function showNotesById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { payload } = res.locals;
        const id = parseInt(req.params.id);
        const userId = parseInt(payload.userId);
        const notes = yield (0, safetyNoteServices_1.getNotesId)(userId, id);
        res.status(200).send(notes);
    });
}
exports.showNotesById = showNotesById;
function deleteNotes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { payload } = res.locals;
        const id = parseInt(req.params.id);
        const userId = parseInt(payload.userId);
        yield (0, safetyNoteServices_1.canDelete)(id, userId);
        yield (0, safetyNoteServices_1.deleteNotesById)(id);
        res.status(201).send('Deleted');
    });
}
exports.deleteNotes = deleteNotes;
