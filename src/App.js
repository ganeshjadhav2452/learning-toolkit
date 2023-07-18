import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route exact path='/' Component={Home} />
    <Route exact path='/cart' Component={Cart} />
   </Routes>
   </>
  );
}

export default App;
