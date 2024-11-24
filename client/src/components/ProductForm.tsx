import { Form, useActionData } from 'react-router-dom';
import { Product } from '../types/index';
import ErrorMessage from './ErrorMessage';

interface ProductFormProps {
  product?: Product;
}

const availabilityOptions = [
  { name: 'Available', value: true },
  { name: 'Out of Stock', value: false }
];

function ProductForm({ product }: ProductFormProps) {
  const errors = useActionData() as string;

  return (
    <>
      <Form className='mt-10 flex flex-col' method='POST'>
        <div className='mb-4'>
          <label className='text-gray-800' htmlFor='name'>
            Product Name:
          </label>
          <input
            id='name'
            type='text'
            className='mt-2 block w-full p-3 bg-gray-50'
            placeholder='Nombre del Producto'
            name='name'
            defaultValue={product?.name || ''}
          />
        </div>
        <div className='mb-4'>
          <label className='text-gray-800' htmlFor='price'>
            Price:
          </label>
          <input
            id='price'
            type='number'
            className='mt-2 block w-full p-3 bg-gray-50'
            placeholder='Precio Producto. ej. 200, 300'
            name='price'
            defaultValue={product?.price || ''}
          />
        </div>

        {product && (
          <div className='mb-4'>
            <label className='text-gray-800' htmlFor='availability'>
              Availability:
            </label>
            <select
              id='availability'
              className='mt-2 block w-full p-3 bg-gray-50'
              name='inStock'
              defaultValue={product?.inStock.toString()}
            >
              {availabilityOptions.map((option) => (
                <option key={option.name} value={option.value.toString()}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {errors && <ErrorMessage>{errors}</ErrorMessage>}

        <input
          type='submit'
          className='mt-5 w-1/2 self-center bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded'
          value={product ? 'Update Product' : 'Register Product'}
        />
      </Form>
    </>
  );
}

export default ProductForm;
