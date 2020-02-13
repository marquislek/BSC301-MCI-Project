import React, { useState } from "react";
import Card from "./card";
import CardDeck from "../cardDeck";
import Grid from "@material-ui/core/Grid";

function CardSortingTest() {
  const [testCriteria, setTestCriteria] = useState("");

  const [criteriaCompleted, setCriteriaCompleted] = useState({
    shapeDone: false,
    colorDone: false,
    numberDone: false
  });

  const [patientCard, setPatientCard] = useState({
    Shape: "Circle",
    Color: "blue",
    Number: 3
  });

  const [testCardOne, setTestCardOne] = useState({
    Shape: "Star",
    Color: "red",
    Number: 2
  });
  const [testCardTwo, setTestCardTwo] = useState({
    Shape: "Triangle",
    Color: "blue",
    Number: 4
  });
  const [testCardThree, setTestCardThree] = useState({
    Shape: "Cross",
    Color: "green",
    Number: ""
  });
  const [testCardFour, setTestCardFour] = useState({
    Shape: "Circle",
    Color: "yellow",
    Number: ""
  });

  function startTest() {
    setPatientCard({
      Shape: "Circle",
      Color: "blue",
      Number: 3
    });

    switch (Math.floor(Math.random() * 2) + 1) {
      case 1:
        setTestCriteria(patientCard.Shape);
        break;
      case 2:
        setTestCriteria(patientCard.Color);
        break;
      default:
        setTestCriteria(patientCard.Number);
    }

    setTestCardOne();
    setTestCardTwo();
    setTestCardThree();
    setTestCardFour();
  }

  return (
    <div>
      <h1>Test Cards</h1>
      <Grid className="testArea" container direction="row" justify="center" >
        <Card
          shape={testCardOne.Shape}
          color={testCardOne.Color}
          number={testCardOne.Number}
        />
        <Card
          shape={testCardTwo.Shape}
          color={testCardTwo.Color}
          number={testCardTwo.Number}
        />
        <Card
          shape={testCardThree.Shape}
          color={testCardThree.Color}
          number={testCardThree.Number}
        />
        <Card
          shape={testCardFour.Shape}
          color={testCardFour.Color}
          number={testCardFour.Number}
        />
      </Grid>
      <h1>Patient Card</h1>
      <Grid className="patientArea" container direction="row" justify="center">
        <Card
          shape={patientCard.Shape}
          color={patientCard.Color}
          number={patientCard.Number}
        />
      </Grid>
    </div>
  );
}

export default CardSortingTest;
