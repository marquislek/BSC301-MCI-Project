import React, { useState } from "react";
import Symbol from "./Symbol";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";

function TestCard(props) {
  const [temp, setTemp] = useState("white");

  function reset() {
    setTemp("white");
  }
  const correct = props.correct;
  function changeColor() {
    console.log("this is working");
    console.log(correct);
    correct ? setTemp("green"): setTemp("red");
    setTimeout(reset, 2000);
    
  }

  return (
    <Card className="Card" style={{ backgroundColor: temp }}>
      <CardActionArea
        style={{ height: "100%", width: "100%", backgroundColor: "#ea9abb" }}
        onClick={() => (changeColor(), props.onGuess(correct))}
      >
        <CardContent
          style={{
            display: "block"
          }}
        >
          {Array(props.number).fill(
            <Symbol shape={props.shape} color={props.color} />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default TestCard;
