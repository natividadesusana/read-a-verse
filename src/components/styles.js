import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #1b2735 0%, #090a0f 65%, #2f4f4f 100%);
  background-size: cover;
  animation: ${gradientAnimation} 1s ease-in-out infinite alternate;
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

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #f6f6f6;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 32px;
  width: 30vw;
  overflow-y: auto;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 300;
  margin: 0;
  margin-top: 15px;
  margin-bottom: 24px;
  color: black;
`;

export const ModalText = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 32px;
  color: black;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background-color: transparent;
  color: #333;
  font-size: 24px;
  font-weight: 300;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #666;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
  color: #8a4b08;

  ion-icon {
    font-size: 14px;
    cursor: pointer;
    color: gray;
  }
`;

export const Pagination = styled.button`
  padding: 10px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: gray;
  font-weight: 400;
  width: 40px;
  text-align: center;

  &:hover {
    background-color: gainsboro;
  }
`;

export const Loading = styled.img`
  height: 30vh;
`;
