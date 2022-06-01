"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const exampleroutes_1 = __importDefault(require("./routes/exampleroutes"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const errorHandler_1 = require("./middleware/errorHandler");
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("tiny"));
app.use('/', exampleroutes_1.default);
app.use(() => {
    throw (0, http_errors_1.default)(404, "route not fount");
});
app.use(errorHandler_1.errorHandler);
mongoose_1.default
    .connect(config_1.DB)
    .then(() => {
    console.log('connect to db');
    app.listen(config_1.PORT, () => {
        console.log(`server listen port no ${config_1.PORT}`);
    });
})
    .catch(() => {
    throw (0, http_errors_1.default)(501, "unable to connect database");
});
