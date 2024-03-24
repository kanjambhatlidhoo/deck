import { Card } from "./Card.js";
import { Guid } from "guid-typescript";
export class Deck {
    deck: Array<Card>;
    deckId: string;

    public constructor (deckId?: string) {
        this.deckId = deckId !== undefined ? deckId : Guid.create().toString();
        this.deck = [];
    }

    public getDeck (): Array<Card> {
        return this.deck;
    }

    public setDeck (deck: Array<Card>): void {
        this.deck = deck;
    }

    public getDeckId (): string {
        return this.deckId;
    }

    /**
     * The current function does not take any parameter but returns the shuffled value of the deck of cards.
     * The function follows the Fischer - Yates algorithm for shuffling the deck. More info can be found below -->
     * @link https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
     * @returns void. Just suffles the deck array of the object.
     */
    public shuffleDeck(): void {

        let currentIndex = this.deck.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [this.deck[currentIndex], this.deck[randomIndex]] = [
                this.deck[randomIndex], this.deck[currentIndex]];
        }
        return;
    }

    public convertToDeck(items: any[]): void {
        try {
            items.forEach(item => {
                if (item.suit || item.value) {
                    this.deck.push(new Card(item.suit, item.value));
                } else {
                    throw new Error("The items do not contain either a suit or a value.");
                }
            });
        } catch (err: any) {
            throw new Error("The items do not contain deck elements. Further details: " + err);
        }
    }
}