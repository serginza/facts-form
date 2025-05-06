import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-ptsans)',
    h1: {
      fontSize: '48px',
      fontWeight: 600,
    },
    h2: {
      fontSize: '40px',
      fontWeight: 600,
    },
    h3: {
      fontSize: '36px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '24px',
      fontWeight: 400,
    },
    h5: {
      fontSize: '16px',
    },
  },
});

export default theme;
