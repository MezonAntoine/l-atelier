import { styled } from "styled-components";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

export const MainContainer = styled(Container)`
  height: 100vh;
`;

export const StyledPodium = styled.div`
  align-items: flex-end;
  width: 500px;
  flex-direction: row;
  display: flex;
`;

export const StyledPodiumItem = styled.div`
  width: 200px;
`;

export const StyledPodiumRank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: #fff;
`;

export const StyledPodiumWinner = styled(StyledPodiumItem)`
  min-height: 300px;
  background: rgb(255, 172, 37);
  background: linear-gradient(
    333deg,
    rgba(255, 172, 37, 1) 0%,
    rgba(254, 207, 51, 1) 13%,
    rgba(254, 224, 51, 1) 53%,
    rgba(255, 172, 37, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPodiumSecond = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  background: blue;
`;

export const StyledPodiumThreed = styled.div`
  min-height: 100px;
  background: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 50% !important;
  margin-bottom: 20px;
`;

export const StyledCol = styled(Col)`
  margin-bottom: 30px;
`;

export const StyledTitle = styled.p`
  font-size: 30px;
  text-align: center;
  margin: 30px 0px;
`;
export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
