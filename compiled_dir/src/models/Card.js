"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    getSuit() {
        return this.suit;
    }
    setSuit(suit) {
        this.suit = suit;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
exports.Card = Card;
