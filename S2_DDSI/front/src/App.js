import logo from './logo.svg';
import './App.css';
import CompShowUser from './User/ShowUser';
import CompAddUser from './User/CreateUser';
import CompEditUser from './User/EditUser';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<CompShowUser />} />
          <Route path="/create" element={<CompAddUser />} />
          <Route path="/edit/:id" element={<CompEditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


