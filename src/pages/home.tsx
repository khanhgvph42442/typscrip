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
    <div  className="flex mt-11">
      <div className="ml-9 w-2/5">
          <p>DANH MỤC SẢN PHẨM</p>
          <ul className="mt-4">
            <li className="mt-1">Iphone</li>
            <li className="mt-1">SamSung</li>
            <li className="mt-1">Oppo</li>
            <li className="mt-1">Realme</li>
          </ul>
        </div>
        <div className="ml-14">
          <h1>San pham</h1>
          <ProductList products={products} />
        </div>
    </div>
  )
}
export default Home