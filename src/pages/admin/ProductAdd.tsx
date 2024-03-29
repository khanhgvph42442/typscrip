import React from 'react'

const ProductAdd = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Add Product</h1>
          <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium">Thêm mới sản phẩm</p>

            <div>
              <label  className="sr-only">Name</label>

              <div className="relative">
                <input id='name'
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter name"
                />
              </div>
            </div>

            <div>
              <label  className="sr-only">Price</label>

              <div className="relative">
                <input id='price'
                  type="number"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter price"
                />
              </div>
            </div>

            <div>
              <label  className="sr-only">Description</label>

              <div className="relative">
                <input id='description'
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Description"
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
