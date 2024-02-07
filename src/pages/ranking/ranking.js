import { useController } from "./controller";
import Row from "react-bootstrap/Row";

import {
  MainContainer,
  StyledTitle,
  StyledImage,
  StyledCard,
  StyledCol,
  StyledText,
} from "./styles";

export default () => {
  const { isLoading, cats } = useController();

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
                <StyledImage
                  src={cat.picture_url}
                  alt="Cat image"
                  loading="lazy"
                />
                {isUnranked ? (
                  <StyledText>Non classé</StyledText>
                ) : (
                  <StyledText>
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
                  </StyledText>
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
          <StyledTitle>Classement des chats</StyledTitle>
          {/* {renderPodium()} */}
          {renderList()}
        </div>
      )}
    </MainContainer>
  );
};
