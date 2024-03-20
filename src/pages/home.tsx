import { useEffect, useState } from "react"
import ProductList from "~/components/productList"
import { TProduct } from "~/interfaces/Product"
const Home = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
      return () => {
        console.log("unmount")
      }
    })
  },[])
  return (
    <div>
      <h1>San pham</h1>
      <ProductList products={products} />
    </div>
  )
}
export default Home