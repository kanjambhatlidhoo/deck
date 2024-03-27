import express from "express";
import { RouteDeck } from "./RouteDeck.js";
export class Router {
    private _expressRouter: any;

    constructor () {
        this._expressRouter = express.Router();

        this._expressRouter.use("/deck", new RouteDeck().expressRouter);
    }

    get expressRouter(): any {
        return this._expressRouter;
    }
}