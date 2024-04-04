import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TProduct } from '~/interfaces/Product'

type Props = {
  onAdd : (data: TProduct) => void;
}

const sechemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(225),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(null,"")
})
const ProductAdd = ({onAdd}: Props) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<TProduct>({
    resolver: joiResolver(sechemaProduct)
  });
  const onSubmit: SubmitHandler<TProduct> = (data) => {
    onAdd(data)
  }
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Add Product</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium">Thêm mới sản phẩm</p>

            <div>
              <label htmlFor="title" className="sr-only">Name</label>

              <div className="relative">
                <input id='name'
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter name"
                  {...register("title", {required: true})}
                />
                {errors.title && <span className="text-danger">{errors.title.message}</span>}
              </div>
            </div>

            <div>
              <label htmlFor="price" className="sr-only">Price</label>

              <div className="relative">
                <input id='price'
                  type="number"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter price"
                  {...register("price", {required: true})}
                />
                 {errors.price && <span className="text-danger">{errors.price.message}</span>}
              </div>
            </div>

            <div>
              <label htmlFor="description" className="sr-only">Description</label>

              <div className="relative">
                <input id='description'
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Description"
                  {...register("description")}
                />
              </div>
            </div>
            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Add Product 
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductAdd
