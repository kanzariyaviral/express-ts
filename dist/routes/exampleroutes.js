"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const examplecontroller_1 = require("../controller/examplecontroller");
const exampleValidation_1 = require("../validation/exampleValidation/exampleValidation");
const router = (0, express_1.Router)();
router.get('/', examplecontroller_1.getExample);
router.post('/', exampleValidation_1.getExampleDataValidation, examplecontroller_1.getExampleData);
exports.default = router;
