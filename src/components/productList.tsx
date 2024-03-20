import { useEffect, useState } from "react";
import { TProduct } from '../interfaces/Product';
type TProps = {
  products: TProduct[];
};
const ProductList = (props: TProps) => {
  console.log(props.products)
 
  return (
    <div className="grid grid-cols-4 gap-7 w-[80%] m-4">
      {props.products.map((product) => (
          <div key={product.id}>

            <a href="#" className="group relative block overflow-hidden">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />

              <div className="relative border border-gray-100 bg-white p-6">
                <h3 className="mt-4 text-lg font-medium text-gray-900">{product.title}</h3>

                <p className="mt-1.5 text-sm text-gray-700">${product.price}</p>

                <form className="mt-4">
                  <button
                    className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </form>
              </div>
            </a>
          </div>
        
      ))}
    </div>
  )

}
export default ProductList