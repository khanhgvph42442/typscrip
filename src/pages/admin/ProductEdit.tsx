import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { getProduct } from '~/apis/product';
import { TProduct } from '~/interfaces/Product'

type Props = {
  onEdit : (data: TProduct) => void;
}

const sechemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(225),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(null,"")
})
const ProductEdit = ({onEdit}: Props) => {
  const {id} = useParams();
  const [product,setProduct] = useState<TProduct | null>(null)
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<TProduct>({
    resolver: joiResolver(sechemaProduct)
  });
  const onSubmit: SubmitHandler<TProduct> = (data) => {
    onEdit({ ...data,id})
  }
  useEffect(() => {
    (async () => {
      const data = await getProduct(`${id}`);
      setProduct(data);
    })();
  }, []);
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Edit Product</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium">Cập nhật sản phẩm</p>

            <div>
              <label  className="sr-only">Name</label>

              <div className="relative">
                <input id='name'
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter name"
                  defaultValue={product?.title}
                  {...register("title", {required: true})}
                />
                {errors.title && <span className="text-danger">{errors.title.message}</span>}
              </div>
            </div>

            <div>
              <label  className="sr-only">Price</label>

              <div className="relative">
                <input id='price'
                  type="number"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter price"
                  defaultValue={product?.price as number}
                  {...register("price", {required: true})}
                />
                 {errors.price && <span className="text-danger">{errors.price.message}</span>}
              </div>
            </div>

            <div>
              <label  className="sr-only">Description</label>

              <div className="relative">
                <input id='description'
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Description"
                  defaultValue={product?.description}
                  {...register("description")}
                />
              </div>
            </div>
            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Edit Product 
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductEdit
