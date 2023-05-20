import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { themeLight, themeDark } from './Theme/Theme';
import GuestPage from './Screens';
import AppRouter from './Utilities/Routes';
import NavigationDrawer from './Components/widgets/NavDrawer';


function App() {
  const isLoggedIn = true;
  return (
    <ThemeProvider theme={themeLight}>

      <div className="App">
      </div>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
