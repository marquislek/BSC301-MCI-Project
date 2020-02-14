import React, { useState } from "react";
import CardDeck from "../cardDeck";
import PatientCard from "./patientCard";
import TestCard from "./testCard";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import cardDeck from "../cardDeck";
import { Card } from "@material-ui/core";

function CardSortingTest() {
  const [patientCard, setPatientCard] = useState({
    Shape: "Circle",
    Color: "blue",
    Number: 1
  });

  const [currentDeck, setCurrentDeck] = useState(cardDeck);

  const [testDeck, setTestDeck] = useState([]);

  let testingCard = {};
  let criteriaDeck = [];
  let otherDeck = [];
  let testCriteria = "";
  let testDone = false;
  let testLog = "";
  let criteriaCompleted = {
    shapeDone: false,
    colorDone: false,
    numberDone: false
  };

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const randomNumber = Math.floor(Math.random() * 64);

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

  function getTestCriteria() {
    const randomNumber = Math.floor(Math.random() * 64);

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
    const firstCard = {
      correctCard: true,
      shape: criteriaDeck[1].shape,
      color: criteriaDeck[1].color,
      number: criteriaDeck[1].number
    };
    const secondCard = {
      correctCard: false,
      shape: otherDeck[0].shape,
      color: otherDeck[0].color,
      number: otherDeck[0].number
    };
    const thirdCard = {
      correctCard: false,
      shape: otherDeck[1].shape,
      color: otherDeck[1].color,
      number: otherDeck[1].number
    };
    const fourthCard = {
      correctCard: false,
      shape: otherDeck[2].shape,
      color: otherDeck[2].color,
      number: otherDeck[2].number
    };

    const tempDeck = [firstCard, secondCard, thirdCard, fourthCard];
    shuffleArray(tempDeck);
    const correctCard = criteriaDeck[1];
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

    console.log(testCriteria);
    testDone = false;
  }

  function startTest() {
    getTestCriteria();
  }

  function test(correct) {
    if (!testDone) {
      testDone = true;
      correct && result();
      setTimeout(nextTest, 2500);
    } else {
    }
  }

  function result() {
    // if (
    //   event.target.shape === criteriaDeck[1].shape && event.target.color === criteria
    // ){return true}else {
    //   return false;
    // }
  }

  function nextTest() {
    shuffleArray(criteriaDeck);
    shuffleArray(otherDeck);
    const firstCard = {
      correctCard: true,
      shape: criteriaDeck[1].shape,
      color: criteriaDeck[1].color,
      number: criteriaDeck[1].number
    };
    const secondCard = {
      correctCard: false,
      shape: otherDeck[0].shape,
      color: otherDeck[0].color,
      number: otherDeck[0].number
    };
    const thirdCard = {
      correctCard: false,
      shape: otherDeck[1].shape,
      color: otherDeck[1].color,
      number: otherDeck[1].number
    };
    const fourthCard = {
      correctCard: false,
      shape: otherDeck[2].shape,
      color: otherDeck[2].color,
      number: otherDeck[2].number
    };

    const tempDeck = [firstCard, secondCard, thirdCard, fourthCard];
    shuffleArray(tempDeck);
    const correctCard = criteriaDeck[1];
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

    console.log(testCriteria);
    testDone = false;
    // setTestCardOne({
    //   correctCard: criteriaDeck.filter(card => {
    //     return testDeck[2] === criteriaDeck[1];
    //   }),
    //   Shape: testDeck[2].shape,
    //   Color: testDeck[2].color,
    //   Number: testDeck[2].number
    // });
    // setTestCardTwo({
    //   correctCard: criteriaDeck.filter(card => {
    //     return testDeck[3] === criteriaDeck[1];
    //   }),
    //   Shape: testDeck[3].shape,
    //   Color: testDeck[3].color,
    //   Number: testDeck[3].number
    // });
    // setTestCardThree({
    //   correctCard: criteriaDeck.filter(card => {
    //     return testDeck[0] === criteriaDeck[1];
    //   }),
    //   Shape: testDeck[0].shape,
    //   Color: testDeck[0].color,
    //   Number: testDeck[0].number
    // });
    // setTestCardFour({
    //   correctCard: criteriaDeck.filter(card => {
    //     return testDeck[1] === criteriaDeck[1];
    //   }),
    //   Shape: testDeck[1].shape,
    //   Color: testDeck[1].color,
    //   Number: testDeck[1].number
    // });
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
        <Button onClick={startTest} variant="contained">
          test
        </Button>
      </Grid>
    </div>
  );
}

export default CardSortingTest;
