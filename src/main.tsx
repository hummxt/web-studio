import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Home from './pages/Home.tsx';
import Product from './pages/Product.tsx';
import Pricing from './pages/Pricing.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';
import Blog from './pages/Blog.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>,
)
