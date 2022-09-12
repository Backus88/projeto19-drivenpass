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
exports.deleteById = exports.getNotesByUserIdAndId = exports.getNotesById = exports.insertNote = exports.getNotesByUserIdAndTitle = void 0;
const database_1 = __importDefault(require("../config/database"));
function getNotesByUserIdAndTitle(title, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.safetyNotes.findMany({
            where: {
                userId: userId,
                title: title
            }
        });
    });
}
exports.getNotesByUserIdAndTitle = getNotesByUserIdAndTitle;
function insertNote(note) {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.default.safetyNotes.create({ data: note });
    });
}
exports.insertNote = insertNote;
function getNotesById(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.safetyNotes.findMany({
            where: {
                userId: userId
            }
        });
    });
}
exports.getNotesById = getNotesById;
function getNotesByUserIdAndId(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.safetyNotes.findMany({
            where: {
                userId: userId,
                id: id
            }
        });
    });
}
exports.getNotesByUserIdAndId = getNotesByUserIdAndId;
function deleteById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.default.safetyNotes.delete({
            where: {
                id: id
            }
        });
    });
}
exports.deleteById = deleteById;
