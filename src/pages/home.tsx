
import { TProduct } from "~/interfaces/Product";
import { Link } from 'react-router-dom';
type Props = { products: TProduct[] };
const Home = ({products}: Props) => {
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
          <div className="grid grid-cols-3 gap-7 w-[50%] m-4">
      {products.map((product) => (
           <div key={product.id}>

          <div className="group relative block overflow-hidden">
            <Link to={`/shop/${product.id}`}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />
            </Link>
          
            <div className="relative border border-gray-100 bg-white p-6">
              <Link to={`/shop/${product.id}`}>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{product.title}</h3>
              </Link>
              <p className="mt-1.5 text-sm text-gray-700">${product.price}</p>
          
              <form className="mt-4">
                <button
                  className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                >
                  Add to Cart
                </button>
              </form>
            </div>
          </div>
          </div>
      ))}
    </div>
        </div>
    </div>
  )
}
export default Home