import styled from "styled-components";

export const Button = styled.button`
  width: 220px;
  background-color: black;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  align-self: center;
  border: 1px solid black;
  margin-top: 10px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: all ease 0.3s;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid black;
  }
`;
