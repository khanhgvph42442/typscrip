import { useEffect, useState } from "react";
import { TProduct } from '../interfaces/Product';
import { Link } from "react-router-dom";
import instance from "~/apis";
import ProductItem from "./productItem";
const ProductList = () => {
  
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    // fetch("http://localhost:3000/products")
    // .then((res) => res.json())
    // .then((data) => {
    //   setProducts(data);
    //   return () => {
    //     console.log("unmount")
    //   }
    // })
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
    <div className="grid grid-cols-3 gap-7 w-[50%] m-4">
      {products.map((product) => (
          <ProductItem product={product}/>
      ))}
    </div>
  )

}
export default ProductList