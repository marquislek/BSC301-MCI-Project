import React from "react";

const cardDeck = [
  {
    key: 1,
    number: 1,
    shape: "Circle",
    color: "green"
  },
  {
    key: 2,
    number: 2,
    shape: "Circle",
    color: "green"
  },
  {
    key: 3,
    number: 3,
    shape: "Circle",
    color: "green"
  },
  {
    key: 4,
    number: 4,
    shape: "Circle",
    color: "green"
  },
  {
    key: 5,
    number: 1,
    shape: "Cross",
    color: "green"
  },
  {
    key: 6,
    number: 2,
    shape: "Cross",
    color: "green"
  },
  {
    key: 7,
    number: 3,
    shape: "Cross",
    color: "green"
  },
  {
    key: 8,
    number: 4,
    shape: "Cross",
    color: "green"
  },
  {
    key: 9,
    number: 1,
    shape: "Triangle",
    color: "green"
  },
  {
    key: 10,
    number: 2,
    shape: "Triangle",
    color: "green"
  },
  {
    key: 11,
    number: 3,
    shape: "Triangle",
    color: "green"
  },
  {
    key: 12,
    number: 4,
    shape: "Triangle",
    color: "green"
  },
  {
    key: 13,
    number: 1,
    shape: "Star",
    color: "green"
  },
  {
    key: 14,
    number: 2,
    shape: "Star",
    color: "green"
  },
  {
    key: 15,
    number: 3,
    shape: "Star",
    color: "green"
  },
  {
    key: 16,
    number: 4,
    shape: "Star",
    color: "green"
  },
  {
    key: 17,
    number: 1,
    shape: "Circle",
    color: "yellow"
  },
  {
    key: 18,
    number: 2,
    shape: "Circle",
    color: "yellow"
  },
  {
    key: 19,
    number: 3,
    shape: "Circle",
    color: "yellow"
  },
  {
    key: 20,
    number: 4,
    shape: "Circle",
    color: "yellow"
  },
  {
    key: 21,
    number: 1,
    shape: "Cross",
    color: "yellow"
  },
  {
    key: 22,
    number: 2,
    shape: "Cross",
    color: "yellow"
  },
  {
    key: 23,
    number: 3,
    shape: "Cross",
    color: "yellow"
  },
  {
    key: 24,
    number: 4,
    shape: "Cross",
    color: "yellow"
  },
  {
    key: 25,
    number: 1,
    shape: "Triangle",
    color: "yellow"
  },
  {
    key: 26,
    number: 2,
    shape: "Triangle",
    color: "yellow"
  },
  {
    key: 27,
    number: 3,
    shape: "Triangle",
    color: "yellow"
  },
  {
    key: 28,
    number: 4,
    shape: "Triangle",
    color: "yellow"
  },
  {
    key: 29,
    number: 1,
    shape: "Star",
    color: "yellow"
  },
  {
    key: 30,
    number: 2,
    shape: "Star",
    color: "yellow"
  },
  {
    key: 31,
    number: 3,
    shape: "Star",
    color: "yellow"
  },
  {
    key: 32,
    number: 4,
    shape: "Star",
    color: "yellow"
  },
  {
    key: 33,
    number: 1,
    shape: "Circle",
    color: "blue"
  },
  {
    key: 34,
    number: 2,
    shape: "Circle",
    color: "blue"
  },
  {
    key: 35,
    number: 3,
    shape: "Circle",
    color: "blue"
  },
  {
    key: 36,
    number: 4,
    shape: "Circle",
    color: "blue"
  },
  {
    key: 37,
    number: 1,
    shape: "Cross",
    color: "blue"
  },
  {
    key: 38,
    number: 2,
    shape: "Cross",
    color: "blue"
  },
  {
    key: 39,
    number: 3,
    shape: "Cross",
    color: "blue"
  },
  {
    key: 40,
    number: 4,
    shape: "Cross",
    color: "blue"
  },
  {
    key: 41,
    number: 1,
    shape: "Triangle",
    color: "blue"
  },
  {
    key: 42,
    number: 2,
    shape: "Triangle",
    color: "blue"
  },
  {
    key: 43,
    number: 3,
    shape: "Triangle",
    color: "blue"
  },
  {
    key: 44,
    number: 4,
    shape: "Triangle",
    color: "blue"
  },
  {
    key: 45,
    number: 1,
    shape: "Star",
    color: "blue"
  },
  {
    key: 46,
    number: 2,
    shape: "Star",
    color: "blue"
  },
  {
    key: 47,
    number: 3,
    shape: "Star",
    color: "blue"
  },
  {
    key: 48,
    number: 4,
    shape: "Star",
    color: "blue"
  },
  {
    key: 49,
    number: 1,
    shape: "Circle",
    color: "red"
  },
  {
    key: 50,
    number: 2,
    shape: "Circle",
    color: "red"
  },
  {
    key: 51,
    number: 3,
    shape: "Circle",
    color: "red"
  },
  {
    key: 52,
    number: 4,
    shape: "Circle",
    color: "red"
  },
  {
    key: 53,
    number: 1,
    shape: "Cross",
    color: "red"
  },
  {
    key: 54,
    number: 2,
    shape: "Cross",
    color: "red"
  },
  {
    key: 55,
    number: 3,
    shape: "Cross",
    color: "red"
  },
  {
    key: 56,
    number: 4,
    shape: "Cross",
    color: "red"
  },
  {
    key: 57,
    number: 1,
    shape: "Triangle",
    color: "red"
  },
  {
    key: 58,
    number: 2,
    shape: "Triangle",
    color: "red"
  },
  {
    key: 59,
    number: 3,
    shape: "Triangle",
    color: "red"
  },
  {
    key: 60,
    number: 4,
    shape: "Triangle",
    color: "red"
  },
  {
    key: 61,
    number: 1,
    shape: "Star",
    color: "red"
  },
  {
    key: 62,
    number: 2,
    shape: "Star",
    color: "red"
  },
  {
    key: 63,
    number: 3,
    shape: "Star",
    color: "red"
  },
  {
    key: 64,
    number: 4,
    shape: "Star",
    color: "red"
  }
];

export default cardDeck;
