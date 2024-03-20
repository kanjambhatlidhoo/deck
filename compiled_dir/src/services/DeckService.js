"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckService = void 0;
const Card_1 = require("../models/Card");
const Deck_1 = require("../models/Deck");
const Constants_1 = require("../utils/Constants");
class DeckService {
    // class follows a singleton pattern. Only one instance of the class will be created which will be used by every other class.
    // Follows the lazy instantiation method since multithreading is currently not in use.
    static getInstance() {
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
    createDeck(shuffle) {
        try {
            const suits = Constants_1.DECK_CONSTANTS.suits;
            const values = Constants_1.DECK_CONSTANTS.values;
            const extras = Constants_1.DECK_CONSTANTS.extras;
            const deckOfCards = new Deck_1.Deck();
            // add the suit and values.
            suits.forEach((suit) => {
                values.forEach((value) => {
                    const card = new Card_1.Card(suit, value);
                    deckOfCards.deck.push(card);
                });
            });
            // add the extra joker cards (twice).
            for (let i = 1; i <= 2; i++) {
                deckOfCards.deck.push(new Card_1.Card("", extras));
            }
            // if we get a shuffle value from the query parameter, then we shuffle the cards in the array.
            if (shuffle) {
                deckOfCards.shuffleDeck();
            }
            // add to deck database.
            return deckOfCards;
        }
        catch (err) {
            throw new Error("Something went wrong. Error details: " + JSON.stringify(err));
        }
    }
}
exports.DeckService = DeckService;
