import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/news" element={<News/>}/>
    <Route path="/news_details" element={<NewsDetails/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/product_details" element={<ProductDetails/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/*" element={<NotFound/>}/>
  </Routes>
</BrowserRouter>
);

