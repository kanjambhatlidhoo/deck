import express from "express";
import { Router } from "./src/routes/Router.js";
import * as bodyParser from "body-parser";

export class App {
    public app: express.Application;

    constructor () {
        this.app = express();
        this._config();
        this._middleware();
    }

    // adding middlewares.

    public _middleware(): void {
        // set router.
        this.app.use(new Router().expressRouter);
    }

    public _config(): void {
        // allow application/json data.
        this.app.use(bodyParser.json());

        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
}

module.exports = new App();