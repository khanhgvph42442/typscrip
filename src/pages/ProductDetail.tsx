import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "~/apis";
import { TProduct } from "~/interfaces/Product";

const ProductDetail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState<TProduct>({
    title: "",
    price:0,
    description:"",
    thumbnail:"",
  })
  useEffect(() => {
    const getProduct = async () => {
      try {
        const {data} = await instance.get(`/products/${id}`);
        setProduct(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct();
  },[]);
  return (
    <div>

    <section className="container mx-auto p-8 bg-white">
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-2/3">
                <div className="w-3/5">
                    <img src={product.thumbnail} alt={product.title}></img>
                </div>
                <div className="flex mt-4">
                  {product.images && product.images.map(item => {
                    return <div className="w-1/5  ml-2">
                      <img src={item} className="w-full rounded-lg" alt=""></img>
                </div>
                  })}
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <h4 className="text-2xl font-bold mb-2">{product.title}</h4>
                <div className="flex">
                    <p className="mr-1">{product.rating}</p>
                </div>
                <div>
                    <p className="mt-6 mb-8 max-w-sm text-red-700 text-2xl">
                    {product.price}đ
                    </p>
                </div>
                <div className="grid">
                    <div>
                        <p className="mb-2">Số lượng</p>
                        <input type="number" value="1" min="1" className="border p-2 mb-2"></input>
                    </div>
                    <button className="bg-red-500 text-white py-2 px-4 rounded">Chọn mua</button>
                </div>
                
            </div>
    </div>
    </section>
    <section className="mx-20">
        <h4 className="text-xl font-bold mt-4">Mô tả sản phẩm</h4>
        <p className="text-gray-700">
        {product.description}
        </p>
    </section>
    </div>
  )
};

export default ProductDetail;