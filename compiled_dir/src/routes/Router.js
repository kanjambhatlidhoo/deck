"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const RouteDeck_1 = require("./RouteDeck");
class Router {
    constructor() {
        this._expressRouter = express_1.default.Router();
        this._expressRouter.use("/deck", new RouteDeck_1.RouteDeck().expressRouter);
    }
    get expressRouter() {
        return this._expressRouter;
    }
}
exports.Router = Router;
