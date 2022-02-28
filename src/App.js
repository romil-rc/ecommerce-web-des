import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Store from './components/Store';
import Cart from './components/Cart';

function App() {
  return (
    <div className='md:space-y-6'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/store' element={ <Store /> } />
          <Route exact path='/cart' element={ <Cart /> } />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
