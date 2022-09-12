"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateCardType(req, res, next) {
    const types = ['Debit', 'Credit', 'Both'];
    const { type } = req.body;
    for (const v of types) {
        if (v === type) {
            next();
            return;
        }
    }
    res.status(404).send("type not found");
    return;
}
exports.default = validateCardType;
