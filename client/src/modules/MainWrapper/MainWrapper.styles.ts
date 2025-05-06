import styled from '@emotion/styled';

export const MainPageWrapper = styled.div({
  maxWidth: '1280px',
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const MainContentWrapper = styled.main({
  maxWidth: '100%',
  margin: '100px 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const StyledHeader = styled.header({
  position: 'fixed',
  top: 0,
  zIndex: 1000,
  // TODO: сделать контейнеры в 1280px
  // width: '100%',
  width: '1280px',
  height: '100px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  outline: '1px solid blue',
  backgroundColor: 'var(--main-bg-color)',
});

// export const StyledHeader = styled.header({
//   position: 'fixed',
//   top: 0,
//   zIndex: 1000,
//   width: '100%',
//   height: '100px',
//   display: 'flex',
//   justifyContent: 'center',
//   outline: '1px solid blue',
//   backgroundColor: 'var(--main-bg-color)',
// });

export const StyledFooter = styled.header({
  position: 'fixed',
  bottom: 0,
  zIndex: 1000,
  // TODO: сделать контейнеры в 1280px
  // width: '100%',
  width: '1280px',
  height: '100px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  outline: '1px solid blue',
  backgroundColor: 'var(--main-bg-color)',
});
