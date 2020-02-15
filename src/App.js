import React, { useState } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import logo from "./logo.svg";

import IntroductionScreen from "./components/IntroductionScreen";
import CardSortingTest from "./components/CardSortingTest";

function App() {

  const [screen, setScreen] = useState(<IntroductionScreen changeScreen={changeAppScreen} />);

  function changeAppScreen() {
    setScreen(<CardSortingTest/>);
  }
  return (
    <div className="App">
      {screen}
    </div>
  );
}

export default App;
