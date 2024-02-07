import { styled } from "styled-components";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

export const MainContainer = styled(Container)`
  height: 100vh;
`;

export const StyledImage = styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 50% !important;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;

export const StyledCol = styled(Col)`
  margin-bottom: 30px;
`;

export const StyledTitle = styled.p`
  font-size: 30px;
  text-align: center;
  margin: 30px 0px;
  font-size: 30px;
  text-align: center;
  margin: 30px 0px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #000000;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: normal;
  font-variant: normal;
  text-transform: none;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledText = styled.p`
  font-size: 14px;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
