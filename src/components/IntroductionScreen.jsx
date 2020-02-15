import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import YouTube from "react-youtube";

function IntroductionScreen(props) {
  return (
    <div>
      <Card style={{backgroundColor: "black"}}>
        <CardContent style={{color:"white"}}>
          Here are the instructions on how to play the game... substitute this
          song with some actual instructions
          <YouTube videoId="2UAbZ3LKB_w" />
        </CardContent>
      </Card>
      <Button onClick={props.changeScreen} variant="contained">
        Start test
      </Button>
    </div>
  );
}

export default IntroductionScreen;
