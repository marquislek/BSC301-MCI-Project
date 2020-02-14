import React from "react";

const cardDeck = [
  {
    id: 1,
    number: 1,
    shape: "Circle",
    color: "green"
  },
  {
    id: 2,
    number: 2,
    shape: "Circle",
    color: "green"
  },
  {
    id: 3,
    number: 3,
    shape: "Circle",
    color: "green"
  },
  {
    id: 4,
    number: 4,
    shape: "Circle",
    color: "green"
  },
  {
    id: 5,
    number: 1,
    shape: "Cross",
    color: "green"
  },
  {
    id: 6,
    number: 2,
    shape: "Cross",
    color: "green"
  },
  {
    id: 7,
    number: 3,
    shape: "Cross",
    color: "green"
  },
  {
    id: 8,
    number: 4,
    shape: "Cross",
    color: "green"
  },
  {
    id: 9,
    number: 1,
    shape: "Triangle",
    color: "green"
  },
  {
    id: 10,
    number: 2,
    shape: "Triangle",
    color: "green"
  },
  {
    id: 11,
    number: 3,
    shape: "Triangle",
    color: "green"
  },
  {
    id: 12,
    number: 4,
    shape: "Triangle",
    color: "green"
  },
  {
    id: 13,
    number: 1,
    shape: "Star",
    color: "green"
  },
  {
    id: 14,
    number: 2,
    shape: "Star",
    color: "green"
  },
  {
    id: 15,
    number: 3,
    shape: "Star",
    color: "green"
  },
  {
    id: 16,
    number: 4,
    shape: "Star",
    color: "green"
  },
  {
    id: 17,
    number: 1,
    shape: "Circle",
    color: "yellow"
  },
  {
    id: 18,
    number: 2,
    shape: "Circle",
    color: "yellow"
  },
  {
    id: 19,
    number: 3,
    shape: "Circle",
    color: "yellow"
  },
  {
    id: 20,
    number: 4,
    shape: "Circle",
    color: "yellow"
  },
  {
    id: 21,
    number: 1,
    shape: "Cross",
    color: "yellow"
  },
  {
    id: 22,
    number: 2,
    shape: "Cross",
    color: "yellow"
  },
  {
    id: 23,
    number: 3,
    shape: "Cross",
    color: "yellow"
  },
  {
    id: 24,
    number: 4,
    shape: "Cross",
    color: "yellow"
  },
  {
    id: 25,
    number: 1,
    shape: "Triangle",
    color: "yellow"
  },
  {
    id: 26,
    number: 2,
    shape: "Triangle",
    color: "yellow"
  },
  {
    id: 27,
    number: 3,
    shape: "Triangle",
    color: "yellow"
  },
  {
    id: 28,
    number: 4,
    shape: "Triangle",
    color: "yellow"
  },
  {
    id: 29,
    number: 1,
    shape: "Star",
    color: "yellow"
  },
  {
    id: 30,
    number: 2,
    shape: "Star",
    color: "yellow"
  },
  {
    id: 31,
    number: 3,
    shape: "Star",
    color: "yellow"
  },
  {
    id: 32,
    number: 4,
    shape: "Star",
    color: "yellow"
  },
  {
    id: 33,
    number: 1,
    shape: "Circle",
    color: "blue"
  },
  {
    id: 34,
    number: 2,
    shape: "Circle",
    color: "blue"
  },
  {
    id: 35,
    number: 3,
    shape: "Circle",
    color: "blue"
  },
  {
    id: 36,
    number: 4,
    shape: "Circle",
    color: "blue"
  },
  {
    id: 37,
    number: 1,
    shape: "Cross",
    color: "blue"
  },
  {
    id: 38,
    number: 2,
    shape: "Cross",
    color: "blue"
  },
  {
    id: 39,
    number: 3,
    shape: "Cross",
    color: "blue"
  },
  {
    id: 40,
    number: 4,
    shape: "Cross",
    color: "blue"
  },
  {
    id: 41,
    number: 1,
    shape: "Triangle",
    color: "blue"
  },
  {
    id: 42,
    number: 2,
    shape: "Triangle",
    color: "blue"
  },
  {
    id: 43,
    number: 3,
    shape: "Triangle",
    color: "blue"
  },
  {
    id: 44,
    number: 4,
    shape: "Triangle",
    color: "blue"
  },
  {
    id: 45,
    number: 1,
    shape: "Star",
    color: "blue"
  },
  {
    id: 46,
    number: 2,
    shape: "Star",
    color: "blue"
  },
  {
    id: 47,
    number: 3,
    shape: "Star",
    color: "blue"
  },
  {
    id: 48,
    number: 4,
    shape: "Star",
    color: "blue"
  },
  {
    id: 49,
    number: 1,
    shape: "Circle",
    color: "red"
  },
  {
    id: 50,
    number: 2,
    shape: "Circle",
    color: "red"
  },
  {
    id: 51,
    number: 3,
    shape: "Circle",
    color: "red"
  },
  {
    id: 52,
    number: 4,
    shape: "Circle",
    color: "red"
  },
  {
    id: 53,
    number: 1,
    shape: "Cross",
    color: "red"
  },
  {
    id: 54,
    number: 2,
    shape: "Cross",
    color: "red"
  },
  {
    id: 55,
    number: 3,
    shape: "Cross",
    color: "red"
  },
  {
    id: 56,
    number: 4,
    shape: "Cross",
    color: "red"
  },
  {
    id: 57,
    number: 1,
    shape: "Triangle",
    color: "red"
  },
  {
    id: 58,
    number: 2,
    shape: "Triangle",
    color: "red"
  },
  {
    id: 59,
    number: 3,
    shape: "Triangle",
    color: "red"
  },
  {
    id: 60,
    number: 4,
    shape: "Triangle",
    color: "red"
  },
  {
    id: 61,
    number: 1,
    shape: "Star",
    color: "red"
  },
  {
    id: 62,
    number: 2,
    shape: "Star",
    color: "red"
  },
  {
    id: 63,
    number: 3,
    shape: "Star",
    color: "red"
  },
  {
    id: 64,
    number: 4,
    shape: "Star",
    color: "red"
  }
];

export default cardDeck;
