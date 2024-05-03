import { Card } from "../models/Card.js";
import { Deck } from "../models/Deck.js";
import { DECK_CONSTANTS } from "../utils/Constants.js";
import { DatabaseManagerService } from "./DatabaseManager.js";
import { Utils } from "./../utils/Utils.js";
export class DeckService {
    /**
     * Class that holds the logic for the creation and dealing of cards to players.
     */
    private static instance: DeckService;
    private static databaseManager: any = DatabaseManagerService.getInstance();

    // class follows a singleton pattern. Only one instance of the class will be created which will be used by every other class.
    // Follows the lazy instantiation method since multithreading is currently not in use.
    public static getInstance(): DeckService {
        if (!DeckService.instance) {
            DeckService.instance = new DeckService();
        }

        return DeckService.instance;
    }

    /**
     * Method for creating a new deck of cards. Uses a shuffle parameter.
     * @param shuffle tells whether the deck is to be shuffled or not. Uses the Fischer Yates algorith for shuffling.
     * @returns Deck object.
     */

    public async createDeck(shuffle: boolean): Promise<Deck> {
        try {
            const suits: Array<string> = DECK_CONSTANTS.suits;
            const values: Array<string> = DECK_CONSTANTS.values;
            const extras: string = DECK_CONSTANTS.extras;
            let databaseInsertPromise: any = [];

            const deckOfCards: Deck = new Deck();
            const currentDate: string = new Date(Date.now()).toISOString();

            // add the deck to the database.
            await DeckService.databaseManager.putItem("Deck", ["deckId", "createdAt"], [deckOfCards.deckId, currentDate]);

            // add the suit and values.
            suits.forEach((suit) => {
                values.forEach((value) => {
                    const card: Card = new Card(suit, value);
                    deckOfCards.deck.push(card);
                });
            });

            // add the extra joker cards (twice).
            for (let i = 1; i <= 2; i++) {
                deckOfCards.deck.push(new Card("", extras));
            }

            // if we get a shuffle value from the query parameter, then we shuffle the cards in the array.
            if (shuffle) {
                deckOfCards.shuffleDeck();
            }

            // add cards to the Card database with the deckId as its foreign key.

            deckOfCards.deck.forEach(card => {
                databaseInsertPromise = databaseInsertPromise.concat(DeckService.databaseManager.putItem("Card", ["deckId", "suit", "value"], [deckOfCards.deckId, card.getSuit(), card.getValue()]));
            });

            const res: any[] = await Promise.allSettled(databaseInsertPromise);

            return deckOfCards;
        }
        catch (err) {
            throw err;
        }
    }

    public async getDeckById(deckId: string): Promise<any> {
        try {
            const items: any[] = await DeckService.databaseManager.getItemById("Card", "deckId", deckId);
            const deck: Deck = new Deck(deckId);
            deck.convertToDeck(items);
            return deck;
        } catch (err: any) {
            throw err;
        }
    }

}