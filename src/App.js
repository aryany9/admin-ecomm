import logo from './logo.svg';
import './App.css';
import Login from './Screens/Authentication/Login';
import Homepage from './Screens/Homepage';

function App() {
  const isLoggedIn = false;
  return (
    <div className="App">
      {
        isLoggedIn ? (
          <Homepage />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
