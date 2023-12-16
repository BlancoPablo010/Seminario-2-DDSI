import logo from './logo.svg';
import './App.css';
import CompShowUser from './User/ShowUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShowUser/>} />
        </Routes>
      </BrowserRouter>
      <CompShowUser></CompShowUser>
    </div>
  );
}

export default App;
