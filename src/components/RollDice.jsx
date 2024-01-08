import React, { useState } from "react";
import styled from "styled-components";


const RollDice = ({ CurrentDice, roleDice }) => {

  
  return (
    <DiceContainer>
      <img
        onClick={roleDice}
        src={`public/images/dice/dice_${CurrentDice}.png`}
        alt="dice 1"
      />
      <div className="click">
        <p>Click on dice to roll</p>
      </div>
     
   
    </DiceContainer>
  );
};

export default RollDice;
const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  img {
    cursor: pointer;
  }
  .click {
    font-size: 24px;
    font-weight: 500;
  }
`;
