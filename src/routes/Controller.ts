import { Deck } from "../models/Deck.js";
import { DeckService } from "../services/DeckService.js";
import { Response } from "../models/Response.js";
import { STATUS_CODES } from "../utils/Constants.js";

export class DeckController {
    // the constructor remains empty.
    constructor() { }
    /**
     * Creates a new deck.
     * @param req Express Request Body
     * @param res Express Response Object
     * @returns Express response object. (res)
     */
    public async createDeck(req: any, res: any): Promise<any> {
        try {
            const shuffle: boolean = req.query?.shuffle ? req.query.shuffle === 'true' ? true : false : false;

            const deckOfCards: Deck = await DeckService.getInstance().createDeck(shuffle);

            const response: Response = new Response("deckId", deckOfCards.getDeckId());

            res.status(STATUS_CODES.get("OK")).send(response);

        }
        catch (err) {
            res.status(STATUS_CODES.get("NOT FOUND")).send("Something went wrong. Error details: ", JSON.stringify(err));
        }
    }

    /**
     * Gets the deck by id. 
     * @param req params -> deckId.
     * @param res -> the deck object of cards.
     */

    public async getDeckById(req: any, res: any): Promise<any> {
        try {
            const deckOfCards: any = await DeckService.getInstance().getDeckById(req.params.deckId);

            const response: Response = new Response("deck", deckOfCards);

            res.status(STATUS_CODES.get("OK")).send(response);
        } catch (err: any) {
            const error: Response = new Response("error", err.message);
            res.status(STATUS_CODES.get("NOT_FOUND")).send(error);
        }
    }
}