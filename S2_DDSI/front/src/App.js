import logo from './logo.svg';
import './App.css';
import CompShowUser from './User/ShowUser';
import CompCreateUser from './User/CreateUser';
import CompEditUser from './User/EditUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          {<Route path="/" element={<CompShowUser />} />}
          {<Route path="/create" element={<CompCreateUser />} />}
          {<Route path="/edit/:id" element={<CompEditUser />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


