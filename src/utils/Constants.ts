export const DECK_CONSTANTS = {
    "suits" : ["Ace", "Spades", "Clubs", "Diamond"],
    "values" : ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"],
    "extras" : "Joker"
};

export const STATUS_CODES: Map<string, number> = new Map(
    [
      ["OK", 200],
      ["CREATED", 201],
      ["NOT FOUND", 404],
      ["BAD REQUEST", 400]
    ]
);