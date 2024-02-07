import { useController } from "./controller";
import Row from "react-bootstrap/Row";

import {
  MainContainer,
  StyledTitle,
  StyledImage,
  StyledCard,
  StyledCol,
} from "./styles";

export default () => {
  const { isLoading, cats } = useController();

  // const renderPodium = () => {
  //   const winners = cats.slice(0, 3);

  //   return (
  //     winners.length && (
  //       <StyledPodium>
  //         <StyledPodiumItem>
  //           <StyledPodiumSecond>
  //             <StyledImage src={winners[1].picture_url} />
  //             <StyledPodiumRank>2</StyledPodiumRank>
  //           </StyledPodiumSecond>
  //         </StyledPodiumItem>
  //         <StyledPodiumItem>
  //           <StyledImage src={winners[0].picture_url} />
  //           <StyledPodiumWinner>
  //             <StyledPodiumRank>1</StyledPodiumRank>
  //           </StyledPodiumWinner>
  //         </StyledPodiumItem>
  //         <StyledPodiumItem>
  //           <StyledImage src={winners[2].picture_url} />
  //           <StyledPodiumThreed>
  //             <StyledPodiumRank>3</StyledPodiumRank>
  //           </StyledPodiumThreed>
  //         </StyledPodiumItem>
  //       </StyledPodium>
  //     )
  //   );
  // };

  const renderList = () => {
    return (
      <Row>
        {cats.map((cat, index) => {
          const isUnranked =
            cat.number_of.victories === 0 &&
            cat.number_of.defeats === 0 &&
            cat.number_of.votes === 0;
          return (
            <StyledCol key={index} xs={6} md={4} xxl={3}>
              <StyledCard>
                <StyledImage src={cat.picture_url} />
                {isUnranked ? (
                  <p>Non classé</p>
                ) : (
                  <p>
                    {cat.number_of.victories > 1
                      ? `${cat.number_of.victories} Victoires`
                      : `${cat.number_of.victories} victoire`}
                    {` | `}
                    {cat.number_of.defeats > 1
                      ? `${cat.number_of.defeats} défaite`
                      : `${cat.number_of.defeats} défaite`}
                    {` | `}
                    {cat.number_of.votes > 1
                      ? `${cat.number_of.votes} votes`
                      : `${cat.number_of.votes} vote`}
                  </p>
                )}
              </StyledCard>
            </StyledCol>
          );
        })}
      </Row>
    );
  };

  return (
    <MainContainer>
      {isLoading ? null : (
        <div>
          <StyledTitle>Classements des chats</StyledTitle>
          {/* {renderPodium()} */}
          {renderList()}
        </div>
      )}
    </MainContainer>
  );
};
