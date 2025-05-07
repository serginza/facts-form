import styled from '@emotion/styled';

export const MainPageWrapper = styled.div({
  width: '100%',
  minWidth: '320px',
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const MainContentWrapper = styled.main({
  width: '100%',
  minWidth: '320px',
  margin: '100px 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const StyledHeader = styled.header({
  position: 'fixed',
  top: 0,
  zIndex: 10,
  width: '100vw',
  minWidth: '320px',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  outline: '2px solid var(--soft-indigo-30)',
  backgroundColor: 'var(--main-bg-color)',
});

export const StyledFooter = styled.footer({
  position: 'fixed',
  bottom: 0,
  zIndex: 10,
  width: '100vw',
  minWidth: '320px',
  height: '100px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  outline: '2px solid var(--soft-indigo-30)',
  backgroundColor: 'rgba(224, 229, 255, 1)',
});
