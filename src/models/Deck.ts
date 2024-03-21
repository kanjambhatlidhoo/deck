import { Card } from "./Card";

export class Deck {
    deck: Array<Card>;

    public constructor () {
        this.deck = [];
    }

    public getDeck (): Array<Card> {
        return this.deck;
    }

    public setDeck (deck: Array<Card>): void {
        this.deck = deck;
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
}