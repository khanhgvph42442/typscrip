import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import './App.css'  
import Login from './pages/Login'
import Notfound from './pages/Notfound'
import ProductDetail from './pages/ProductDetail' 
import Register from './pages/Register'
import Shop from './pages/shop'    
import { TProduct } from './interfaces/Product';
import Dashboard from './pages/admin/Dashboard';
import ProductAdd from './pages/admin/ProductAdd';
import { createProduct, getProducts, updateProduct } from './apis/product';
import instance from './apis';
import ProductEdit from './pages/admin/ProductEdit';
function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data)
    })();
  },[]);

  const handleAddProduct = (data: TProduct) => {
    (async () => {
      const newProduct = await createProduct(data);
      setProducts([...products,newProduct]);
      navigate("/admin")
    })();
  };

  const handleEditProduct = (data: TProduct) => {
    (async () => {
      const product = await updateProduct(data);
      setProducts(
        products.map((item) => (item.id === product.id ? product : item))
      );
      navigate("/admin");
    })();
  };

  const handleDelete = (id: number) => {
    (async () => {
      const confirmValue = confirm("Bạn có muốn xóa sản phẩm ko");
      if (confirmValue) {
        await instance.delete(`/products/${id}`);
        setProducts(products.filter((item) => item.id !== id && item));
      }
    })();
  };
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
            <Route index element={<Dashboard products={products} onDel={handleDelete}/>}/>
            <Route path='/admin/add' element={<ProductAdd onAdd={handleAddProduct}/>}/>
            <Route
                path="/admin/edit/:id"
                element={<ProductEdit onEdit={handleEditProduct} />}
              />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App