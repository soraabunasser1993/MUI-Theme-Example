import { ThemeProvider  } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {Stack, Box, Container} from '@mui/material';
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import customTheme from './theme';
import Header from './components/Header/Header';
import CustomButtonComponent from './components/CustomButtonComponent';

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <ThemeProvider theme={customTheme}>
      <Header />
      <Container maxWidth='md' sx={{ mt: 3 }}>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Typography variant="h1">h1 title</Typography>
        <Typography variant="myVariant">my variant</Typography>
        <Box>{`theme.breakpoints.up('md') matches: ${matches}`}</Box>
        <CustomButtonComponent />
      </Container>
    </ThemeProvider>
  );
}

export default App