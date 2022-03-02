import logo from './logo.svg';
import './App.css';
import Header from 'components/Header';
import Login from 'features/Auth/components/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
    </div>
  );
}

export default App;
