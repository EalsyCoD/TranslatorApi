import React from 'react';
import { useAppSelector } from 'hooks/useAppSelector';

import { RootState } from 'store/reducers';

import { Container, Skeleton } from './styles';

export function SkeletonLoader() {
  const isLoader = useAppSelector((state: RootState) => state.loader)

  return (
    <>
      {isLoader.status && (
        <Container>
          <Skeleton />
        </Container>
      )}
    </>
  )
}
