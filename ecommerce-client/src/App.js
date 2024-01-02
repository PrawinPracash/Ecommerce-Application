import { BrowserRouter , Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/Register/RegisterForm";
import AllProducts from "./components/AllProducts/AllProducts";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
