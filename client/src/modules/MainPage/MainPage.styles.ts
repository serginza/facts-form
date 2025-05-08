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
  '@media (max-width: 1024px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media (max-width: 480px)': {
    gridTemplateColumns: '1fr',
  },
};

export const videoContainerStyles = {
  maxWidth: '560px',
  maxHeight: '315px',
  position: 'relative',
  margin: '24px 96px 0 32px',
  scale: 1.5,
  '@media (max-width: 1024px)': {
    maxWidth: '320px',
    maxHeight: '180px',
    margin: '48px 32px',
  },
  '@media (max-width: 480px)': {
    marginBottom: 0,
    scale: 1,
  },
};

export const mainSectionContainerStyles = {
  width: '100%',
  maxWidth: '1280px',
  paddingBottom: '100px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '32px',
  '@media (max-width: 1024px)': {
    flexDirection: 'column',
  },
};
