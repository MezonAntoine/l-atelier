import { useController } from "./controller";
import { useSpring, animated } from "@react-spring/web";

import {
  MainContainer,
  StyledRow,
  StyledLeft,
  StyledRight,
  StyledImage,
  StyledButtonsContainer,
  StyledImageButton,
  StyledRankingButtonContainer,
  StyledRankingText,
} from "./styles";

export default () => {
  const { isLoading, duel, onVote, animate, onRanking } = useController();

  const renderButton = (isLike, winner, loser) => {
    return (
      <StyledImageButton
        src={isLike ? "heart.png" : "cross.png"}
        onClick={() => onVote(winner, loser)}
      />
    );
  };

  return (
    <MainContainer fluid>
      {!isLoading && duel.length && (
        <StyledRow>
          <StyledLeft xs={6}>
            <StyledImage src={duel[0].picture_url} />
            <StyledButtonsContainer>
              {renderButton(false, duel[1]._id, duel[0]._id)}
              {renderButton(true, duel[0]._id, duel[1]._id)}
            </StyledButtonsContainer>
          </StyledLeft>
          <StyledRight xs={6}>
            <StyledImage src={duel[1].picture_url} />
            <StyledButtonsContainer>
              {renderButton(false, duel[0]._id, duel[1]._id)}
              {renderButton(true, duel[1]._id, duel[0]._id)}
            </StyledButtonsContainer>
          </StyledRight>
        </StyledRow>
      )}
      <StyledRankingButtonContainer onClick={onRanking}>
        <StyledRankingText>Voir le classement</StyledRankingText>
      </StyledRankingButtonContainer>
    </MainContainer>
  );
};
