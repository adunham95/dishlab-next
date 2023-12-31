import { createTheme } from '@mui/material';
import { palette } from './palette';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: palette,
});

export type ExactTheme = typeof theme;
export default theme;
