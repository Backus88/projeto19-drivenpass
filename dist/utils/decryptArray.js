"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptArray = void 0;
const cryptrInfo_1 = require("./cryptrInfo");
function decryptArray(arr, type) {
    let newArr = [...arr];
    if (type === 'password') {
        for (const v of newArr) {
            v.password = (0, cryptrInfo_1.decrypt)(v.password);
        }
        return newArr;
    }
    if (type === 'cvc') {
        for (const v of newArr) {
            v.cvc = (0, cryptrInfo_1.decrypt)(v.cvc);
        }
        return newArr;
    }
    return ('not valid type');
}
exports.decryptArray = decryptArray;
