import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.h1`
  background-image: linear-gradient(white, #38495a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 70px;
  max-width: 50%;
`;

export const Button = styled.button`
  color: white;
  margin-top: 50px;
  font-size: 15px;
  border-radius: 3px;
  background-color: transparent;
  border: 1px solid white;
  padding: 10px 20px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;
