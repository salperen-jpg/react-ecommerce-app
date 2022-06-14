import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Home,
  About,
  Error,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from './pages';
import { Navbar, Footer, Sidebar } from './components';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<SingleProduct />} />
          <Route path='cart' element={<Cart />} />
          <Route
            path='checkout'
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
