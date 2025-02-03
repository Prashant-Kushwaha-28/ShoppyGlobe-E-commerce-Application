import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import ProductDetail from '../components/ProductDetail';
import Cart from '../components/Cart';
import Search from '../components/Search';
import Checkout from '../components/Checkout';
import NotFound from '../components/NotFound';
import Account from '../components/Account';  
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
const rootReducer = combineReducers({
  cart: cartReducer
});

export default AppRoutes;
