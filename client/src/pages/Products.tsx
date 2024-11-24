import { Link, useLoaderData } from 'react-router-dom';
import { Product } from '../types/index';
import ProductDetails from '../components/ProductDetails';

function Products() {
  const products = useLoaderData() as Product[];

  return (
    <>
      <div className='flex justify-between'>
        <h2 className='text-4xl font-bold text-slate-500'>Products</h2>
        <Link
          className='rounded-md text-white p-3 text-sm font-bold shadow-sm bg-indigo-600 hover:bg-indigo-500'
          to='/products/create'
        >
          Create Product
        </Link>
      </div>

      <div className='mt-8'>
        <table className='w-full mt-5 table-auto'>
          <thead className='bg-slate-800 text-white'>
            <tr>
              <th className='p-2'>Product</th>
              <th className='p-2'>Price</th>
              <th className='p-2'>Availability</th>
              <th className='p-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductDetails key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;
