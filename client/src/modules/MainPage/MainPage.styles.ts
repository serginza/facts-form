import styled from '@emotion/styled';
import type { CSSProperties } from 'react';

type StyledSectionType = {
  flexDirection?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  padding?: CSSProperties['padding'];
  height?: CSSProperties['height'];
  gap?: CSSProperties['gap'];
  backgroundColor?: CSSProperties['backgroundColor'];
};

export const MainPageContentWrapper = styled.div({
  // width: '100%',
});

export const StyledSection = styled.section<StyledSectionType>(
  ({
    height = 'auto',
    flexDirection = 'column',
    justifyContent = 'center',
    alignItems = 'center',
    gap = 0,
    padding = 0,
    backgroundColor = 'white',
  }) => ({
    width: '100%',
    display: 'flex',
    height,
    flexDirection,
    justifyContent,
    alignItems,
    gap,
    padding,
    backgroundColor,
    outline: '1px solid red',
  })
);
