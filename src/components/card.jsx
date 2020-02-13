import React, { useState } from "react";
import Symbol from "./Symbol";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

function newCard(props) {
  return (
    <Card className="Card" style={{backgroundColor:"#ea9abb"}}>
      <CardContent  >
        {Array(props.number).fill(
          <Symbol shape={props.shape} color={props.color} />
        )}
      </CardContent>
    </Card>
  );
}

export default newCard;
