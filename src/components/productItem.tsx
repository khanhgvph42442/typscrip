import React from "react";
import { Link } from "react-router-dom";
import { TProduct } from "~/interfaces/Product";
import style from "./ProductItem.module.scss";

type Props = { product: TProduct };
const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <>
      
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
    </>
  );
};

export default ProductItem;