import { useController } from "./controller";
import { useSpring, animated, config } from "react-spring";

import {
  MainContainer,
  StyledRow,
  StyledLeft,
  StyledRight,
  StyledImage,
  StyledRankingButtonContainer,
  StyledRankingText,
  StyledTitle,
} from "./styles";

export default () => {
  const { isLoading, duel, onVote, animate, onRanking, index } =
    useController();

  const transition = useSpring({
    config: { ...config.gentle, duration: 300 },
    from: { opacity: 0, transform: "translateY(30px)" },
    opacity: animate ? 0 : 1,
    delay: 0,
  });

  return (
    <MainContainer fluid>
      {!isLoading && duel.length > 0 && (
        <>
          <StyledTitle>Clique sur le chat le plus beau</StyledTitle>
          <StyledRow>
            <StyledLeft xs={6}>
              <animated.div style={transition}>
                <StyledImage
                  alt="Cat image"
                  loading="lazy"
                  src={duel[0].picture_url}
                  onClick={() => onVote(duel[0]._id, duel[1]._id)}
                />
              </animated.div>
            </StyledLeft>
            <StyledRight xs={6}>
              <animated.div style={transition}>
                <StyledImage
                  alt="Cat image"
                  loading="lazy"
                  src={duel[1].picture_url}
                  onClick={() => onVote(duel[1]._id, duel[0]._id)}
                />
              </animated.div>
            </StyledRight>
          </StyledRow>
        </>
      )}
      <StyledRankingButtonContainer onClick={onRanking}>
        <StyledRankingText>Voir le classement</StyledRankingText>
      </StyledRankingButtonContainer>
    </MainContainer>
  );
};
