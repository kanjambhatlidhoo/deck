"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS_CODES = exports.DECK_CONSTANTS = void 0;
exports.DECK_CONSTANTS = {
    "suits": ["Ace", "Spades", "Clubs", "Diamond"],
    "values": ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"],
    "extras": "Joker"
};
exports.STATUS_CODES = new Map([
    ["OK", 200],
    ["CREATED", 201],
    ["NOT FOUND", 404],
    ["BAD REQUEST", 400]
]);
