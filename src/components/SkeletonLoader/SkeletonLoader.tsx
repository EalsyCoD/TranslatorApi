import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/types";
import { Container, Skeleton } from "./styles";

export const SkeletonLoader = () => {
  const isLoader = useSelector((state: RootState) => state.loader);

  return (
    <React.Fragment>
      {isLoader.status ? (
        <Container>
          <Skeleton></Skeleton>
        </Container>
      ) : null}
    </React.Fragment>
  );
};
