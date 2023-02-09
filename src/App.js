import React from 'react';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
