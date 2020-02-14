import React, { useState } from "react";
import Symbol from "./Symbol";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";

function PatientCard(props) {
  return (
    <Card className="Card">
      <div
        style={{ height: "100%", width: "100%", backgroundColor: "#ea9abb" }}
      >
        <CardContent
          style={{
            display: "block"
          }}
        >
        {props.onClick}
          {Array(props.number).fill(
            <Symbol shape={props.shape} color={props.color} />
          )}
        </CardContent>
      </div>
    </Card>
  );
}

export default PatientCard;
