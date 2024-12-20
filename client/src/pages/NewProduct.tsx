import { Link } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

function NewProduct() {
  return (
    <>
      <div className='flex justify-between'>
        <h2 className='text-4xl font-bold text-slate-500'>Add Product</h2>
        <Link
          className='rounded-md text-white p-3 text-sm font-bold shadow-sm bg-indigo-600 hover:bg-indigo-500'
          to='/'
        >
          Go Back to Products
        </Link>
      </div>

      <ProductForm />
    </>
  );
}

export default NewProduct;
