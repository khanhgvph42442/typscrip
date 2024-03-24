
import ProductList from "~/components/productList"
const Home = () => {
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
        <div className="ml-14 text-2xl">
          <h1>San pham</h1>
          <ProductList/>
        </div>
    </div>
  )
}
export default Home