import { Deck } from "../models/Deck.js";
import { DeckService } from "../services/DeckService.js";
import { Response } from "../models/Response.js";
import { STATUS_CODES } from "../utils/Constants.js";

export class DeckController {
    // the constructor remains empty.
    constructor() { };
    /** 
     * Creates a new deck.
     * @param req Express Request Body
     * @param res Express Response Object
     * @returns Express response object. (res)
    */
    public async createDeck(req: any, res: any): Promise<any> {
        try {
            const shuffle: string = req.query?.shuffle ? req.query.shuffle : undefined;

            const deckOfCards: Deck = await DeckService.getInstance().createDeck(shuffle);

            const response: Response = new Response("deck", deckOfCards.getDeck());

            res.status(STATUS_CODES.get("OK")).send(response);

        }
        catch (err) {
            res.status(STATUS_CODES.get("NOT FOUND")).send("Something went wrong. Error details: ", err);
        }
    }
}