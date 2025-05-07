import styled from '@emotion/styled';
import type { CSSProperties } from 'react';

type StyledSectionType = {
  height?: CSSProperties['height'];
  backgroundColor?: CSSProperties['backgroundColor'];
};

export const MainPageContentWrapper = styled.div({
  width: '100%',
});

export const StyledSection = styled.section<StyledSectionType>(
  ({ height = 'auto', backgroundColor = 'var(--main-bg-color)' }) => ({
    width: '100%',
    display: 'flex',
    height,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 0,
    padding: 0,
    backgroundColor,
  })
);

export const factsDataContainerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  '@media (max-width: 720px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media (max-width: 400px)': {
    gridTemplateColumns: '1fr',
  },
};
