import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function IntroductionScreen(props) {
  return (
    <div>
      <Card style={{ backgroundColor: "#d2fafb" }}>
        <CardContent style={{ color: "black" }}>
          <h1>Instructions</h1>
          <ul>
            <li>
              When you click on the test button, five random cards will appear
              on the change
            </li>
            <li>
              Four of them will be random cards on the test section, whereas
              one of them will be the patient card
            </li>
            <li>
              Based on the patient select the card that is of the 3 randomly
              selected criteria(shape, number, color)
            </li>
            <li>
              After 10 rounds the criteria will be randomly selected again
            </li>
            <li>
              After 10 sets the test will end and you will be shown your
              results
            </li>
          </ul>
          <h1>Consent</h1>
          By clicking on the button below you consent to all test results being
          recorded for academic purposes
        </CardContent>
      </Card>
      <Button onClick={props.changeScreen} variant="contained">
        Start test
      </Button>
    </div>
  );
}

export default IntroductionScreen;
