import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { addProduct } from '../services/ProductService';

export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  let error = '';

  if (Object.values(data).includes('')) {
    error = 'All fields are required';
    return error;
  }

  await addProduct(data);

  return redirect('/');
}
