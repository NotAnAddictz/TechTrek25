import './App.css';
import Dashboard from './pages/dashboard';
import Balances from './pages/landing';
import Login from './pages/login';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Login/> } />
      <Route path="/dashboard" element={ <Dashboard/> } />
      <Route path="/home" element={ <Balances/> } />

    </Routes>
  </div>
  );
}

export default App;
