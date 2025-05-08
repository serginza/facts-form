import styled from '@emotion/styled';

export const FieldsetWrapper = styled.fieldset({
  marginTop: '40px',
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  border: 'none',
  outline: '2px solid var(--soft-indigo-30)',
  borderRadius: '6px',
  backgroundColor: 'white',
});

export const responseMessageStyles = {
  margin: 'auto',
  padding: '0 20px',
  textAlign: 'center',
  '@media (max-width: 720px)': {
    margin: '100px auto',
  },
};
