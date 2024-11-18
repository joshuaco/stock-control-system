import { Form, Link, useActionData } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';

function NewProduct() {
  const errors = useActionData() as string;

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
          />
        </div>

        {errors && <ErrorMessage>{errors}</ErrorMessage>}

        <input
          type='submit'
          className='mt-5 w-1/2 self-center bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded'
          value='Registrar Producto'
        />
      </Form>
    </>
  );
}

export default NewProduct;
