import { Container } from '@mui/material';
import MainPage from './components/MainPage';
import './App.css';

const App = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{m: 0, p: 0}}>
      <MainPage />
    </Container>
  );
}

export default App;
