import React, { useState } from "react";
import "./App.css";
import Choices from "./components/Choices/choices";

function App() {
  const [compIsShown, setCompIsShown] = useState(false);
  // const [isShow, setIsShow] = useState(false);

  // useEffect(() => {
  //   setIsShow(isBoolean);
  // }, [isBoolean, setIsShow]);

  // const shufler = () => {
  //   setIsShow(false);
  // };

  // if (!isShow) {
  //   return null;
  // }
  return (
    <div className="App">
      <header className="App-header">This is my base app</header>
      <div className="quiz-box">
        <button className="start-button" onClick={() => setCompIsShown(true)}>
          Start
        </button>
        {compIsShown && <Choices />}
      </div>
    </div>
  );
}

export default App;
