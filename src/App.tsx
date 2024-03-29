import { useEffect, useState } from 'react'
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
import instance from './apis';
import { TProduct } from './interfaces/Product';
import Dashboard from './pages/admin/Dashboard';
import ProductAdd from './pages/admin/ProductAdd';
function App() {
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const {data} = await instance.get("/products");
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    };
    getAllProducts()
  },[]);
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/'>
            <Route index element={<Home products={products}/>} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path='/admin'>
            <Route index element={<Dashboard products={products}/>}/>
            <Route path='/admin/add' element={<ProductAdd/>}/>
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App