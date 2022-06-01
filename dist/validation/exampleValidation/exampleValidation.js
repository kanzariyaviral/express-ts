"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExampleDataValidation = void 0;
const validatore_1 = __importDefault(require("../utils/validatore"));
const exampleSchema_1 = require("./exampleSchema");
const getExampleDataValidation = (req, res, next) => (0, validatore_1.default)(exampleSchema_1.exampleSchema.getExampleDate, req.body, next);
exports.getExampleDataValidation = getExampleDataValidation;
