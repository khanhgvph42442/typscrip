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
            <a href="" className="block">
              <img
                  alt={product.title}
                  src={product.thumbnail}
                  className="h-64 w-full object-cover sm:h-90 lg:h-90"
              />

              <h3 className="mt-4 text-base  text-black-900 ">{product.title}</h3>
              <div className="flex p">
                <p className="pr-2 text-red-600"></p>
                  <p></p>
              </div>
              <p className="mt-2 max-w-sm text-red-700">
              {product.price}đ
              </p>
            </a>
          </div>
        
      ))}
    </div>
  )

}
export default ProductList