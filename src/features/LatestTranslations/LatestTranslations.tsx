import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLatestTranslates } from "src/store/actions/LastTranslatesAction";
import { RootState } from "src/store/reducers";
import { Container, ContainerItems, Title } from "./styles";

export const LastTranslations = () => {
  const dispatch = useDispatch();

  const stateLastTranslates = useSelector(
    (state: RootState) => state.lastTranslates.lastTranslates
  );

  React.useEffect(() => {
    dispatch(getLatestTranslates());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Title>From</Title>
        <Title>To</Title>
      </Container>
      <ContainerItems>
        {stateLastTranslates.length ? (
          <>
            {stateLastTranslates.map((item, i) => (
              <React.Fragment key={i}>
                <Title>{item.from}</Title>
                <Title>{item.to}</Title>
              </React.Fragment>
            ))}
          </>
        ) : (
          <></>
        )}
      </ContainerItems>
    </>
  );
};
