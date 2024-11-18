import { Link } from 'react-router-dom';

function Products() {
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
    </>
  );
}

export default Products;
