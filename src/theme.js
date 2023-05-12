import { createTheme, responsiveFontSizes  } from '@mui/material/styles'
import { orange } from '@mui/material/colors'

let customTheme = createTheme({
  palette: { // override palette
    primary: {
      main: '#fd7267',
      contrastText: '#ddd'
    },
    secondary: {
      main: '#008CBA',
    }
  },
  spacing: 10, // override general spacing
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","), // override default font family
    h1: { // override h1 styles
      fontSize: '2rem' // change default font size
    },
    myVariant: { // adding my custom variant
      fontSize: '6rem',
      color: orange[400]
    }
  },
  components: {
    MuiButton: { // override general button style
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 700,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  }
});

customTheme = responsiveFontSizes(customTheme);

export default customTheme;