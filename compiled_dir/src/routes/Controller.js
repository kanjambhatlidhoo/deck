"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckController = void 0;
const DeckService_1 = require("../services/DeckService");
const Response_1 = require("../models/Response");
const Constants_1 = require("../utils/Constants");
class DeckController {
    // the constructor remains empty.
    constructor() { }
    ;
    /**
     * Creates a new deck.
     * @param req Express Request Body
     * @param res Express Response Object
     * @returns Express response object. (res)
    */
    createDeck(req, res) {
        var _a;
        try {
            const shuffle = ((_a = req.query) === null || _a === void 0 ? void 0 : _a.shuffle) ? req.query.shuffle : undefined;
            const deckOfCards = DeckService_1.DeckService.getInstance().createDeck(shuffle);
            const response = new Response_1.Response("deck", deckOfCards.getDeck());
            res.status(Constants_1.STATUS_CODES.get("OK")).send(response);
        }
        catch (err) {
            res.status(Constants_1.STATUS_CODES.get("NOT FOUND")).send("Something went wrong. Error details: ", err);
        }
    }
}
exports.DeckController = DeckController;
