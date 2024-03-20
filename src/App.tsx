import React from 'react'
import { Route, Routes } from "react-router-dom";
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import './App.css'  
import Login from './pages/Login'
import Notfound from './pages/Notfound'
import ProductDetail from './pages/ProductDetail' 
import Register from './pages/Register'
import Shop from './pages/shop'    
function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App