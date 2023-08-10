
import './App.css';
import EventHandeling from './components/EventHandeling';
import Home from './components/Home'; 
import Login from './components/Login';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import Signup from './components/Signup';
import {BrowserRouter, Link, Route, Routes}  from 'react-router-dom';
import Statemanagement from './components/Statemanagement';

function App() {
  return (
    <div >
      <BrowserRouter>
       {/* <Link to="/login">Login</Link>
      <Link  to="/Signup">signup</Link>  */}
      <Navbar />
      <Routes>
      <Route element={<Home />} path='/'/>
      <Route element={<Login />} path='/login'/>
      <Route element={<Signup />} path='/signup'/>
      <Route element={<EventHandeling />} path='/event'/>
      <Route element={<Statemanagement />} path='/State'/>

      <Route element={<Notfound />} path='*'/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
