import { Link, useLoaderData } from 'react-router-dom';
import { Product } from '../types/index';
import ProductForm from '../components/ProductForm';

function EditProduct() {
  const product = useLoaderData() as Product;

  return (
    <>
      <div className='flex justify-between'>
        <h2 className='text-4xl font-bold text-slate-500'>Edit Product</h2>
        <Link
          className='rounded-md text-white p-3 text-sm font-bold shadow-sm bg-indigo-600 hover:bg-indigo-500'
          to='/'
        >
          Go Back to Products
        </Link>
      </div>

      <ProductForm product={product} />
    </>
  );
}

export default EditProduct;
