"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_controller_js_1 = __importDefault(require("./app.controller.js"));
const PORT = process.env.SERVER_PORT || 4000;
(0, app_controller_js_1.default)().listen(PORT, () => {
    console.log("✅ STATUS IN SERVER : PASSED ");
    console.log(`✅ SERVER IS RUNNING ON PORT : ${PORT}`);
});
