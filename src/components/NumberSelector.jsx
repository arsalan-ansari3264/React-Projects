import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({selectNumber, setselectNumber, error}) => {
  
  //   console.log(selectNumber)
  const boxArray = [1, 2, 3, 4, 5, 6];
  return (
    <NumberSelectorContainer>
    <p className="error">{error}</p>
      <div className="flex">
        {boxArray.map((value, i) => (
          <Box
            key={i}
            onClick={() => setselectNumber(value)}
            isSelected={value === selectNumber}
          >
            {value}
          </Box>
        ))}
      </div>
      <div className="end">
        <p>Select Number</p>
      </div>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  padding: 1vw 3vw;
  .error{
    position: absolute;
    font-size: 16px;
    color: red;
    top:18%;
    font-weight: 500;
  }
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-weight: 500;
    font-size: 30px;
  }
  .end {
    display: flex;
    align-items: flex-end;
    justify-content: end;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid #000;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
