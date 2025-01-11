import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Header from './components/Header.tsx';
import Home from './pages/Home.tsx';
import Product from './pages/Product.tsx';
import Pricing from './pages/Pricing.tsx';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  </BrowserRouter>,
)
