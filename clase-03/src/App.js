import { Provider } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import store from './store/store'
import HojaDePersonaje from './components/HojaDePersonaje';
import BotoneraPelea from './components/BotoneraPelea';

function App() {
  return (
    <Provider store={store}>
      <Box textAlign='center'>
        <Typography variant='h1'>
          Tour de Heroes
        </Typography>
      </Box>
      <Container>
        <HojaDePersonaje/>
        <BotoneraPelea/>
      </Container>
    </Provider>
  );
}

export default App;
