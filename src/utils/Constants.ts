export const DECK_CONSTANTS = {
    "suits" : ["Ace", "Spades", "Clubs", "Diamond"],
    "values" : ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"],
    "extras" : "Joker"
};

export const STATUS_CODES: Map<string, number> = new Map(
    [
      ["OK", 200],
      ["CREATED", 201],
      ["NOT_FOUND", 404],
      ["BAD_REQUEST", 400]
    ]
);

export const DATABASE_CONSTANTS = {
  PORT: 8041,
  HOST: "localhost",
  USER: "kanjambhat.lidhoo",
  DATABASE_NAME: "DeckDatabase",
  DATABASE_PASSWORD: "xj1192gf"
};