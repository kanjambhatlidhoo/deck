export class Card {
    suit : string;
    value : string;

    constructor (suit: string, value: string) {
        this.suit = suit;
        this.value = value;
    }

    public getSuit (): string {
        return this.suit;
    }

    public setSuit (suit: string): void {
        this.suit = suit;
    }

    public getValue (): string {
        return this.value;
    }

    public setValue (value: string): void {
        this.value = value;
    }
}