import React from 'react';
import { useAppSelector } from 'hooks/useAppSelector';

import { RootState } from 'store/reducers';

import { Container, Skeleton } from './styles';

export const SkeletonLoader = () => {
  const isLoader = useAppSelector((state: RootState) => state.loader);

  return (
    <React.Fragment>
      {isLoader.status && (
        <Container>
          <Skeleton></Skeleton>
        </Container>
      )}
    </React.Fragment>
  );
};
