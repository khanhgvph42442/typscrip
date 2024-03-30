import { Link } from "react-router-dom";
import { TProduct } from "~/interfaces/Product";

type Props = {products: TProduct[]};

const Dashboard = ({products}: Props) => {
  return (
    <div>
      <Link to="/admin/add"className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
        Add Product
      </Link>
      <div className="overflow-x-auto">
        <table className="w-full bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className=" px-4 py-2 font-medium text-gray-900">Name</th>
              <th className=" px-4 py-2 font-medium text-gray-900">Price</th>
              <th className=" px-4 py-2 font-medium text-gray-900">Description</th>
              <th className=" px-4 py-2 font-medium text-gray-900">Thumbnail</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products.map((item) => (
              
               <tr key={item.id}>
                <td className=" px-4 py-2 font-medium text-gray-900">{item.title}</td>
                <td className=" px-4 py-2 text-gray-700">{item.price}</td>
                <td className=" px-4 py-2 text-gray-700">{item.description}</td>
                <td className="px-4 py-2 text-gray-700">
                  <img width={200} src={item.thumbnail} alt={item.title} />
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <button
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 mr-1"
                  >
                    Edit
                  </button>
                  <button
                    className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                  </td>
             </tr>
            ))}
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;