import React from "react";
import styled from "styled-components";
import {Button} from "../styled/Button";

const Home = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/bg-dice.png" alt="" />
      </div>
      <div>
        <div className="dice_container">
          <h1>DICE GAME</h1>
          <Button  onClick={toggle}>Play Now</Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .dice_container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      color: #000;
      font-size: 96px;
      font-weight: 700;
      white-space: nowrap;
    }
  }
`;
// const Button = styled.button`
//   width: 220px;
//   background-color: #000;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 5px;
//   font-size: 16px;
//   cursor: pointer;
//   align-self: flex-end;
//   border: 1px solid transparent;

//   &:hover {
//     background-color: white;
//     color: black;
//     border: 1px solid black;
//     transition: all ease 0.3s;
//   }
// `;
