import logo from './logo.svg';
import './App.css';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <UserContextProvider>
      <h1 style={{ fontWeight: 100 }}>Hey this is the project for Context Api with chai aur code !</h1>
      <Login />
      <Profile />
    </UserContextProvider>

  );
}

export default App;
