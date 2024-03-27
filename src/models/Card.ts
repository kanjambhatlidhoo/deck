export class Card {
    suit : string | undefined;
    value : string;

    public constructor (suit: string | undefined, value: string) {
        this.suit = suit;
        this.value = value;
    }

    public getSuit (): string | undefined {
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