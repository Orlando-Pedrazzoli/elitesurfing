import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton';
import useScrollToTop from './Hooks/useScrollToTop';

function App() {
  useScrollToTop();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route
          path='/fiji'
          element={<ShopCategory banner={men_banner} category='fiji' />}
        />
        <Route
          path='/j-bay'
          element={<ShopCategory banner={women_banner} category='j-bay' />}
        />
        <Route
          path='/hawaii'
          element={<ShopCategory banner={kid_banner} category='hawaii' />}
        />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
