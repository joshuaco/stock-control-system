import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { addProduct, updateProduct } from '../services/ProductService';

export async function action({ request, params }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  let error = '';

  if (Object.values(data).includes('')) {
    error = 'All fields are required';
    return error;
  }

  if (params.id) {
    await updateProduct(+params.id, data);
  } else {
    await addProduct(data);
  }

  return redirect('/');
}
