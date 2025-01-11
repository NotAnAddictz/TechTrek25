import './App.css';
import Dashboard from './pages/dashboard';
import Balances from './pages/landing';
import OtherRequestPage from './pages/OtherRequestPage';
import Register from './pages/register';
import RequestForm from './components/forms';
import Login from './pages/login';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Login/> } />
      <Route path="/dashboard" element={ <Dashboard/> } />
      <Route path="/home" element={ <Balances/> } />
      <Route path="/OtherRequestPage" element={ <OtherRequestPage/> } />
      <Route path="/request_form" element={ <RequestForm/> } />
      <Route path="/register" element={ <Register/> } />


    </Routes>
  </div>
  );
}

export default App;
