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
exports.deleteNotesById = exports.canDelete = exports.getNotesId = exports.getNotes = exports.createNote = exports.checkUniqueNote = void 0;
const errorMessages_1 = require("../utils/errorMessages");
const safetyNoteRepository_1 = require("../repositories/safetyNoteRepository");
function checkUniqueNote(title, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const thereisTitle = yield (0, safetyNoteRepository_1.getNotesByUserIdAndTitle)(title, userId);
        if (thereisTitle.length > 0) {
            throw (0, errorMessages_1.notPossibleOperation)("title already exists");
        }
    });
}
exports.checkUniqueNote = checkUniqueNote;
function createNote(safetyNote, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = {
            title: safetyNote.title,
            note: safetyNote.note,
            userId: userId
        };
        yield (0, safetyNoteRepository_1.insertNote)(data);
    });
}
exports.createNote = createNote;
function getNotes(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, safetyNoteRepository_1.getNotesById)(userId);
        if (data.length === 0) {
            throw (0, errorMessages_1.notFoundError)('userId');
        }
        return data;
    });
}
exports.getNotes = getNotes;
function getNotesId(userId, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, safetyNoteRepository_1.getNotesByUserIdAndId)(id, userId);
        if (data.length === 0) {
            throw (0, errorMessages_1.notFoundError)('userId or id');
        }
        const notes = data[0];
        return notes;
    });
}
exports.getNotesId = getNotesId;
function canDelete(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, safetyNoteRepository_1.getNotesByUserIdAndId)(id, userId);
        if (data.length === 0) {
            throw (0, errorMessages_1.notFoundError)('userId or id');
        }
    });
}
exports.canDelete = canDelete;
function deleteNotesById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, safetyNoteRepository_1.deleteById)(id);
    });
}
exports.deleteNotesById = deleteNotesById;
