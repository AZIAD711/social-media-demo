"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongo_db_1 = require("./database/mongo.db");
const auth_routing_js_1 = __importDefault(require("./module/auth/auth.routing.js"));
const app = () => {
    dotenv_1.default.config();
    (0, mongo_db_1.databaseConnection)();
    const router = (0, express_1.default)();
    router.use(express_1.default.json());
    router.use("/auth", auth_routing_js_1.default);
    return router;
};
exports.app = app;
exports.default = exports.app;
