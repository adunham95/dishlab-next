declare module '@mui/material/styles' {
    interface Palette {
      white: Palette['primary'];
    }
  
    interface PaletteOptions {
      white?: PaletteOptions['primary'];
    }
  }

  declare module "@mui/material/AppBar" {
    interface AppBarPropsColorOverrides {
      white: true;
    }
  }

export const palette = {
    white: {
        main: "#fff"
    },
    primary: {
        main: '#85ff9a',
    },
    secondary: {
        main: '#4c5d6d',
    },
}