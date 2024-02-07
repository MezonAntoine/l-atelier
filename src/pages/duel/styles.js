import { styled } from "styled-components";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export const MainContainer = styled(Container)`
  height: 100vh;
`;

export const StyledRow = styled(Row)`
  height: 100%;
`;

export const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledLeft = styled(StyledCol)`
  background-color: #ededed;
  // opacity: ${(props) => (props.animate ? "0" : "1")};
  // visibility: ${(props) => (props.animate ? "hidden" : "visible")};
  // transition: "all .2s",
  animation: fadeIn 3s ease-in-out;
`;

export const StyledRight = styled(StyledCol)`
  background-color: #fff;
`;

export const StyledImage = styled(Image)`
  width: 300px;
  height: 300px;
  border-radius: 50% !important;
`;

export const StyledButtonsContainer = styled(Row)``;

export const StyledImageButton = styled(Image)`
  width: 70px;
  height: auto;
  cursor: pointer;
`;

export const StyledRankingButtonContainer = styled.button`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 15px;
  width: 200px;
  cursor: pointer;
  border: none;
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 18px;
  padding: 10px 20px 10px 20px;

  &:hover {
    background: #3cb0fd;
    background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
    text-decoration: none;
  }
`;

export const StyledRankingText = styled.p`
  margin-bottom: 0;
`;
