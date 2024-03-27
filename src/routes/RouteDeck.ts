import express from "express";
import { DeckController } from "./Controller.js";

const controller: DeckController = new DeckController();

export class RouteDeck {
    private _expressRouter: any;

    constructor () {
        this._expressRouter = express.Router();

        // set API routes.
        this._expressRouter.post("/create", controller.createDeck);
        this._expressRouter.get("/getdeckbyid/:deckId", controller.getDeckById);
    }

    get expressRouter(): any {
        return this._expressRouter;
    }
}