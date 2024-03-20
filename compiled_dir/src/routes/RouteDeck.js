"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteDeck = void 0;
const express_1 = __importDefault(require("express"));
const Controller_1 = require("./Controller");
const controller = new Controller_1.DeckController();
class RouteDeck {
    constructor() {
        this._expressRouter = express_1.default.Router();
        // set API routes.
        this._expressRouter.post("/create", controller.createDeck);
    }
    get expressRouter() {
        return this._expressRouter;
    }
}
exports.RouteDeck = RouteDeck;
