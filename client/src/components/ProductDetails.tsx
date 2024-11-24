import { Form, Link, useFetcher } from 'react-router-dom';
import { Product } from '../types/index';
import { formatCurrency } from '../utils';

interface ProductDetailsProps {
  product: Product;
}

function ProductDetails({ product }: ProductDetailsProps) {
  const isAvailable = product.inStock;
  const fetcher = useFetcher();

  const handleConfirmDelete = (e: React.FormEvent<HTMLFormElement>) => {
    if (!confirm('Are you sure you want to delete this product?')) {
      e.preventDefault();
    }
  };

  return (
    <tr className='border-b '>
      <td className='p-3 text-lg text-gray-800'>{product.name}</td>
      <td className='p-3 text-lg text-gray-800'>
        {formatCurrency(product.price)}
      </td>
      <td className='p-3 text-lg text-gray-800'>
        <fetcher.Form method='POST'>
          <button
            type='submit'
            name='id'
            value={product.id}
            className={`${
              isAvailable ? 'text-black' : 'text-red-600'
            } rounded p-2 text-xs uppercase font-bold w-full border`}
          >
            {isAvailable ? 'Available' : 'Out of Stock'}
          </button>
        </fetcher.Form>
      </td>
      <td className='p-3 text-lg text-gray-800 '>
        <div className='flex gap-3 items-center'>
          <Link
            to={`/products/${product.id}/edit`}
            className='bg-indigo-600 text-white rounded w-full p-2 uppercase text-xs text-center font-bold'
          >
            Edit
          </Link>

          <Form
            className='w-full'
            method='POST'
            action={`/products/${product.id}/delete`}
            onSubmit={(e) => handleConfirmDelete(e)}
          >
            <input
              type='submit'
              value='Delete'
              className='bg-red-600 text-white rounded w-full p-2 uppercase text-xs text-center font-bold cursor-pointer'
            />
          </Form>
        </div>
      </td>
    </tr>
  );
}

export default ProductDetails;
