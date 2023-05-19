import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { themeLight, themeDark } from './Theme/Theme';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { HomeRoutes, LoginRoutes } from './Utilities/Routes';

let routeConfig = [];
routeConfig = routeConfig.concat(LoginRoutes());

function App() {
  const isLoggedIn = false;
  return (
    <ThemeProvider theme={themeLight}>
      <div className="App">
        <BrowserRouter >
          {
            isLoggedIn ? (
              <Navigate to="/homepage" />
            ) : (
              <Navigate to="/login" />
            )
          }
          <LoginRoutes />
          <HomeRoutes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
