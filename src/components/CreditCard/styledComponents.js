import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InnerContainer1 = styled.div`
  background-color: #344e7a;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InnerContainerTwo = styled.div`
  background-color: #f5f5f5;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 30px;
  color: #ffffff;
`;

export const Heading2 = styled.h1`
  font-size: 30px;
  color: #475569;
`;

export const CardContainer = styled.div`
  background-image: url(https://assets.ccbp.in/frontend/hooks/credit-card-bg.png);
  background-size: cover;
  padding: 10px;
  width: 350px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 25px;
  border-radius: 15px;
`;

export const Para = styled.p`
  font-size: 12px;
`;

export const CardInputContainer = styled.div`
  width: 350px;
  height: 200px;
  border-radius: 15px;
`;

export const InputData = styled.input`
  width: 100%;
  height: 50px;
`;
