import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-ptsans)',
    h1: {
      fontSize: '3rem',
      fontWeight: 600,
      color: 'var(--dark-indigo-100)',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: 'var(--dark-indigo-100)',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: 'var(--dark-indigo-100)',
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 400,
      color: 'var(--dark-indigo-100)',
    },
    h5: {
      fontSize: '16px',
      color: 'var(--dark-indigo-100)',
    },
    body1: {
      color: 'var(--deep-dark-indigo-100)',
    },
    body2: {
      color: 'var(--deep-dark-indigo-100)',
    },
  },
});

export default theme;
