
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ProductsPage from '../components/ProductsPage';
import ProductDetail from '../components/ProductDetail';
import CartPage from '../components/CartPage';
import LoginPage from '../components/LoginPage';
import SignupPage from '../components/SignupPage';
import { CartProvider } from '../context/CartContext';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  );
};

export default Index;
