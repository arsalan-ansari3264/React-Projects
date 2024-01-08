import React from "react";
import styled from "styled-components";

const Rules = ({ flag }) => {
  return (
    <RuleContainer>
      <h1>How to play dice game</h1>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RuleContainer>
  );
};

export default Rules;

const RuleContainer = styled.div`
max-width: 600px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  background: #FBF1F1;
  position: absolute;
  right:1%;
  bottom: 10%;
  border-radius: 5px;
  box-shadow: 0 5px 10px 0px rgba(0,0,0,0.4);
`;
