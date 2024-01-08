import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const Gameplay = () => {
  
  const [score, setScore] = useState(0);
  const [selectNumber, setselectNumber] = useState();
  const [CurrentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);


  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (!selectNumber) {
      setError("You have not selected any number!!!");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    setselectNumber(undefined);
    if (randomNumber === selectNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
  };

  const resetScore = () => {
    setScore(0);
  };
  const RuleShow = () => {
    setVisible((prev) => !prev);
  };
  return (
    <MainContainer>
      <div className="topSection">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          selectNumber={selectNumber}
          setselectNumber={setselectNumber}
        />
      </div>
      <RollDice CurrentDice={CurrentDice} roleDice={roleDice} />
      <div className="btn">
        <OutlineButton onClick={resetScore}>Reset Now</OutlineButton>
        <Button onClick={RuleShow}>{visible ? "Hide" : "Show"} Rules</Button>
      </div>
      {visible && <Rules />}
    </MainContainer>
  );
};

export default Gameplay;
const MainContainer = styled.div`
  .topSection {
    padding: 2vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
  }
`;
