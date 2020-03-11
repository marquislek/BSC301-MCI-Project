import React, { useState } from "react";
import PatientCard from "./patientCard";
import TestCard from "./testCard";
import Grid from "@material-ui/core/Grid";
import cardDeck from "../cardDeck";

function CardSortingTest(props) {
  const currentDeck = cardDeck;
  const delay = 2000;
  const criteriaDuration = 9;
  let noOfTest = 0;
  let patientResults = {
    errors: 0,
    correct: 0,
    perseverationErrors: 0,
    nonPerseverationErrors: 0
  };
  let criteriaDeck = [];
  let otherDeck = [];
  let testCriteria = "";
  let testDone = false;
  let noOfSets = 0;
  

  let randomNumber = Math.floor(Math.random() * 64);
  switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
      testCriteria = currentDeck[randomNumber].shape;
      criteriaDeck = currentDeck.filter(card => {
        return card.shape === testCriteria;
      });
      otherDeck = currentDeck.filter(card => {
        return card.shape !== testCriteria;
      });

      break;
    case 2:
      testCriteria = currentDeck[randomNumber].color;
      criteriaDeck = currentDeck.filter(card => {
        return card.color === testCriteria;
      });
      otherDeck = currentDeck.filter(card => {
        return card.color !== testCriteria;
      });
      break;
    default:
      testCriteria = currentDeck[randomNumber].number;
      criteriaDeck = currentDeck.filter(card => {
        return card.number === testCriteria;
      });
      otherDeck = currentDeck.filter(card => {
        return card.number !== testCriteria;
      });
  }
  shuffleArray(criteriaDeck);
  shuffleArray(otherDeck);
  let firstCard = {
    correctCard: true,
    shape: criteriaDeck[1].shape,
    color: criteriaDeck[1].color,
    number: criteriaDeck[1].number
  };
  let secondCard = {
    correctCard: false,
    shape: otherDeck[0].shape,
    color: otherDeck[0].color,
    number: otherDeck[0].number
  };
  let thirdCard = {
    correctCard: false,
    shape: otherDeck[1].shape,
    color: otherDeck[1].color,
    number: otherDeck[1].number
  };
  let fourthCard = {
    correctCard: false,
    shape: otherDeck[2].shape,
    color: otherDeck[2].color,
    number: otherDeck[2].number
  };

  let tempDeck = [firstCard, secondCard, thirdCard, fourthCard];
  shuffleArray(tempDeck);
  const [patientCard, setPatientCard] = useState({
    Shape: criteriaDeck[0].shape,
    Color: criteriaDeck[0].color,
    Number: criteriaDeck[0].number
  });
  const [testDeck, setTestDeck] = useState(
    tempDeck.map(tempDeckCard => (
      <TestCard
        onGuess={test}
        correct={tempDeckCard.correctCard}
        shape={tempDeckCard.shape}
        color={tempDeckCard.color}
        number={tempDeckCard.number}
      />
    ))
  );

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  function getTestCriteria() {
    randomNumber = Math.floor(Math.random() * 64);
    noOfSets+= 1;
    noOfTest = 0;
    switch (Math.floor(Math.random() * 3) + 1) {
      case 1:
        testCriteria = currentDeck[randomNumber].shape;
        criteriaDeck = currentDeck.filter(card => {
          return card.shape === testCriteria;
        });
        otherDeck = currentDeck.filter(card => {
          return card.shape !== testCriteria;
        });

        break;
      case 2:
        testCriteria = currentDeck[randomNumber].color;
        criteriaDeck = currentDeck.filter(card => {
          return card.color === testCriteria;
        });
        otherDeck = currentDeck.filter(card => {
          return card.color !== testCriteria;
        });
        break;
      default:
        testCriteria = currentDeck[randomNumber].number;
        criteriaDeck = currentDeck.filter(card => {
          return card.number === testCriteria;
        });
        otherDeck = currentDeck.filter(card => {
          return card.number !== testCriteria;
        });
    }
    nextTest();
  }

  function nextTest() {
    testDone = false;
    shuffleArray(criteriaDeck);
    shuffleArray(otherDeck);
    firstCard = {
      correctCard: true,
      shape: criteriaDeck[1].shape,
      color: criteriaDeck[1].color,
      number: criteriaDeck[1].number
    };
    secondCard = {
      correctCard: false,
      shape: otherDeck[0].shape,
      color: otherDeck[0].color,
      number: otherDeck[0].number
    };
    thirdCard = {
      correctCard: false,
      shape: otherDeck[1].shape,
      color: otherDeck[1].color,
      number: otherDeck[1].number
    };
    fourthCard = {
      correctCard: false,
      shape: otherDeck[2].shape,
      color: otherDeck[2].color,
      number: otherDeck[2].number
    };

    tempDeck = [firstCard, secondCard, thirdCard, fourthCard];
    shuffleArray(tempDeck);
    setPatientCard({
      Shape: criteriaDeck[0].shape,
      Color: criteriaDeck[0].color,
      Number: criteriaDeck[0].number
    });
    setTestDeck(
      tempDeck.map(tempDeckCard => (
        <TestCard
          onGuess={test}
          correct={tempDeckCard.correctCard}
          shape={tempDeckCard.shape}
          color={tempDeckCard.color}
          number={tempDeckCard.number}
        />
      ))
    );
  }

  function test(correct) {
    if (!testDone) {
      testDone = true;
      correct && result();
      noOfTest += 1;
      noOfTest === criteriaDuration
        ? setTimeout(getTestCriteria, delay)
        : setTimeout(nextTest, delay);
    }
  }

  function result() {
    
  }

  return (
    <div>
      <h1>Test Cards</h1>
      <Grid
        className="testArea"
        container
        direction="row"
        justify="space-evenly"
      >
        {testDeck}
      </Grid>
      <h1>Patient Card</h1>
      <Grid className="patientArea" container direction="row" justify="center">
        <PatientCard
          shape={patientCard.Shape}
          color={patientCard.Color}
          number={patientCard.Number}
        />
      </Grid>
    </div>
  );
}

export default CardSortingTest;
